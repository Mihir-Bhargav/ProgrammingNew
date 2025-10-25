import pandas as pd
import numpy as np 
import time as time 
import math as math 
from ib_async import *  # type: ignore
import seaborn as sns
import matplotlib.pyplot as plt
import yfinance as yf
import pandas as pd
import pytz 
from itertools import product
pd.options.display.float_format = '{:.4f}'.format
from sklearn.linear_model import LinearRegression
from sklearn.multiclass import OneVsRestClassifier # added (from sklearn v. 1.7)

# Iterative backtestin => trading based more on events, unlike vectorised backtesting. 

# import yfinance as yf
# import numpy as np
# import matplotlib.pyplot as plt

# class IterativeBase:

#     def __init__(self, symbol, start, end, amount):
#         self.symbol = symbol
#         self.start = start
#         self.end = end
#         self.initial_balance = amount
#         self.current_balance = amount
#         self.units = 0
#         self.trades = 0
#         self.get_data()

#     def get_data(self):
#         raw = yf.download(self.symbol, self.start, self.end)
#         raw = raw.copy().dropna() # type: ignore
#         raw = raw.loc[self.start:self.end]
#         raw.rename(columns={"Close": "price"}, inplace=True)
#         raw["returns"] = np.log(raw["price"] / raw["price"].shift(1))
#         raw["spread"] = 0.005 * (raw["High"] - raw["Low"])
#         raw = raw[["price", "spread", "returns"]].dropna().copy()
#         self.data = raw
#         return raw

#     def plot_data(self, cols=None):
#         if cols is None:
#             cols = "price"
#         self.data[cols].plot(figsize=(12, 8), title=self.symbol)
#         plt.show()

#     def get_values(self, bar):
#         date = str(self.data.index[bar].date()) # pyright: ignore[reportAttributeAccessIssue]
#         price = float(self.data.price.iloc[bar])  # convert to scalar float
#         spread = float(self.data.spread.iloc[bar])  # convert to scalar float
#         return date, price, spread

#     def print_current_balance(self, bar):
#         date, price, spread = self.get_values(bar)
#         print(f"{date} | Current Balance: {self.current_balance:.2f}")

#     def buy_instrument(self, bar, units=None, amount=None):
#         date, price, spread = self.get_values(bar)

#         if amount is not None:
#             units = int(amount / price)
#         if units is None:
#             raise ValueError("Units must be specified or calculable from amount.")

#         self.current_balance -= units * price
#         self.units += units
#         self.trades += 1
#         print(f"{date} | Buying {units} units for {price:.5f}")


# # ------------------------
# # USAGE EXAMPLE
# # ------------------------

# ticker = IterativeBase("AAPL", "2025-01-01", "2025-10-09", 100000)

# # Optionally print data summary
# print(ticker.data.head())

# # Plot price
# ticker.plot_data()

# # Get first bar values
# print(ticker.get_values(0))

# # Buy fixed units
# ticker.buy_instrument(0, units=10)
# print(f"Units after trade: {ticker.units}")
# ticker.print_current_balance(0)

# # Buy using an amount
# ticker.buy_instrument(1, amount=5000)
# ticker.print_current_balance(1)


import yfinance as yf
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import sympy as smp

class test_mathSTRAT():

    def __init__(self, symbol, start, end):
        """
        Please select shorter time frames, like the previous 15-20 sessions
        """
        self.symbol = symbol
        self.start = start
        self.end = end
    
    def __repr__(self): 
        return "test_mathSTRAT(self.symbol={}, self.start = {}, self.end={})".format(self.symbol ,self.start, self.end)

    def get_data(self):
        raw = yf.download(self.symbol, self.start, self.end)
        raw = raw.copy().dropna()
        raw = raw.loc[self.start:self.end]
        raw.rename(columns={"Close": "price"}, inplace=True)
        raw["returns"] = np.log(raw["price"] / raw["price"].shift(1))
        raw["spread"] = 0.005 * (raw["High"] - raw["Low"])
        raw = raw[["price", "spread", "returns"]].dropna().copy()
        self.data = raw
        return raw

    def plot_chart(self):
        self.data.reset_index(inplace=True)  # Ensure 'Date' is a column
        plt.figure(figsize=(12, 6))
        plt.plot(self.data["Date"], self.data["price"], label="Price")
        plt.title(f"{self.symbol} Price Chart")
        plt.xlabel("Date")
        plt.ylabel("Price")
        plt.grid(True)
        plt.legend()
        plt.tight_layout()
        plt.show()

    def test_strategy(self):
        """
        Computes the first derivative of price with respect to time using NumPy.
        Stores the result in self.data["dpdt"].
        """
        df = self.data.copy()
        df = df.reset_index()

        # Ensure 'Date' is datetime
        df["Date"] = pd.to_datetime(df["Date"])

        # Convert datetime to seconds since epoch
        df["t"] = df["Date"].astype("int64") / 1e9

        # Extract time and price
        t = df["t"].to_numpy()
        y = df["price"].to_numpy()

        # Check lengths
        if len(t) != len(y):
            raise ValueError("Time and price arrays must be the same length.")

        # Compute first derivative
        dpdt = np.gradient(y, t)

        # Store result
        df["dpdt"] = dpdt
        df.set_index("Date", inplace=True)
        self.data = df

        return df[["price", "dpdt"]]

        
ticker = test_mathSTRAT("AAPL", "2019-09-01", "2022-10-01")
ticker.get_data()
ticker.plot_chart()
ticker.test_strategy()








