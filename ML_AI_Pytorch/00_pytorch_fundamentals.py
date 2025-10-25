
import matplotlib.pyplot as plt
import numpy as np
import torch
from torch import nn
import math

weight  = 0.8
bias = 0.2

# Create
start = 0
end = 1
step = 0.02
X = torch.arange(start, end, step).unsqueeze(dim=1)
y = weight * X + bias

print(X[:10], y[:10]) 

def plot_predictions(train_data,
                     train_labels,
                     test_data,
                     test_labels,
                     predictions=None):
  """
  Plots training data, test data and compares predictions.
  """
  plt.figure(figsize=(10, 7))

  # Plot training data in blue
  plt.scatter(train_data, train_labels, c="b", s=4, label="Training data")

  # Plot test data in green
  plt.scatter(test_data, test_labels, c="g", s=4, label="Testing data")

  if predictions is not None:
    # Plot the predictions in red (predictions were made on the test data)
    plt.scatter(test_data, predictions, c="r", s=4, label="Predictions")

  # Show the legend
  plt.legend(prop={"size": 14}) 

  print(len(X), len(y)) 

train_split = int(0.8 * len(X))
X_train, y_train = X[:train_split], y[:train_split]
x_test, y_test  = X[train_split:], y[train_split:]
len(X_train), len(y_train), len(x_test), len(y_test) 

plt.scatter(X_train, y_train, c="r", label = "Training data")
plt.scatter(x_test, y_test, c="b", label = "Testing data")
plt.legend

class LinearRegressionModel(nn.Module):
  # Almost everything in pytorch inherits from nn.module
  def __init__(self):
    super().__init__()
    self.weights = nn.Parameter(torch.randn(1, requires_grad=True, dtype= torch.float))
    self.bias = nn.Parameter(torch.randn(1, requires_grad =True, dtype=torch.float))

  def forward(self, x:torch.Tensor) -> torch.Tensor:
    return self.weights * x + self.bias


# Pytorch model
torch.manual_seed(42)
# Create an instance of model (this is a subclass of nn.module)
model_0 = LinearRegressionModel()
list(model_0.parameters())

# Making predictions with our model
with torch.inference_mode():
  y_preds = model_0(x_test)
y_preds

def plot_predictions(train_data, train_labels, test_data, test_labels, predictions=None):
  """
  Plots training data, test data and compares predictions.
  """
  plt.figure(figsize=(10, 7))

  # Plot training data in blue
  plt.scatter(train_data, train_labels, c="r", s=4, label="Training data")

  # Plot test data in green
  plt.scatter(test_data, test_labels, c="b", s=4, label="Testing data")

  # Are there predictions?
  if predictions is not None:
    # Plot the predictions in red (predictions were made on the test data)
    plt.scatter(test_data, predictions, c="g", s=4, label="Predictions")

  # Show the legend
  plt.legend(prop={"size": 14})
  plt.show()