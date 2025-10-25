import numpy as np 
import matplotlib.pyplot as plt
import scipy as sp
from scipy.integrate import odeint
from scipy.integrate import solve_ivp
import sympy as smp


# def dvdt(t, v):
#     return 3*v**2 - 5
# v0 = 0

# t = np.linspace(0,1,100)
# sol = odeint(dvdt, y0 = v0, t=t, tfirst=True)
# print(sol) 
# v_sol = sol.T[0]
# plt.plot(t, v_sol,)
# plt.ylabel("v(t)", fontsize=22)
# plt.xlabel("t", fontsize=22)
# plt.show() 

# def dSdx(x, S):
#     y1, y2 = S
#     return[y1 + y2**2 + 3*x, 3*y1 + y2**3 - np.cos(x) ]
# y1_0 = 0
# y2_0 = 0
# S_0 = (y1_0, y2_0)
# x= np.linspace(0,1,100)
# sol = odeint(dSdx, y0=S_0, t=x, tfirst=True)
# y1_sol = sol.T[0]
# y2_sol = sol.T[1]
# plt.plot(x, y1_sol)
# plt.plot(x, y2_sol)
# plt.show() 

# def dSdx(x, S): 
#     x,v = S
#     return[v, -v**2 + np.sin(x)]
# x_0 = 0
# v_0 = 5
# S_0 = (x_0, v_0)
# t = np.linspace(0,1,100)
# sol = odeint(dSdx, y0=S_0, t=t, tfirst=True)
# x_sol = sol.T[0]
# v_sol = sol.T[1]
# plt.plot(t, x_sol)
# plt.plot(t, v_sol)
# plt.show()


x, a, b, c = smp.symbols('x a b c', real=True)
print(x**2+smp.exp(a)) 
x, a, b, c = smp.symbols('x a b c', real=True)
f = smp.exp(-a*smp.sin(x**2)) * smp.sin(b**x) * smp.log(smp.Abs(c * smp.sin(x)**2 / x)) # pyright: ignore[reportOperatorIssue]
print(f)
dfdx = smp.diff(f, x)
print(dfdx)


filt = np.ones(15) / 15
y_smooth = np.convolve(y, filt, mode='valid')
dysdx = np.gradient(y_smooth, x[7:-7])
x_trimmed = x[7:-7]  # 15-point filter removes 7 points from each end
dysdx = np.gradient(y_smooth, x_trimmed)

plt.figure(figsize=(12, 6))
plt.plot(df.index[7:-7], dysdx, label="Smoothed Price Derivative", color="red")
plt.xlabel("Time")
plt.ylabel("dPrice/dTime")
plt.title("Smoothed Price Derivative Over Time")
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()
