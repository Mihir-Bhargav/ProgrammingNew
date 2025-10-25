# # # # import random


# # # # def get_choices():
# # # #   player_choice = input("Enter a choice (rock, paper, scissor): ")
# # # #   options = ["rock", "paper", "scissor"]
# # # #   computer_choice = random.choice(options)
# # # #   choices = {"player": player_choice, "computer": computer_choice}
# # # #   return choices


# # # # choices = get_choices()
# # # # print(choices)

# # # # player_choice = choices["player"]
# # # # # This extracts the value associated with the key "player" from the dictionary choices and assigns it to the variable player_choice. Can be compared to in javascript: player_choice = choices.player.style ..... etc. You can also use arrays in javascript to store multiple values in a single variable.
# # # # computer_choice = choices["computer"]

# # # # if player_choice == "rock" or player_choice == "paper" or player_choice == "scissor":
# # # #   if computer_choice == player_choice:
# # # #     print("TIE")
# # # #   elif computer_choice == "rock" and player_choice == "scissor":
# # # #     print("You lose")
# # # #   elif computer_choice == "paper" and player_choice == "rock":
# # # #     print("You lose")
# # # #   elif computer_choice == "scissor" and player_choice == "paper":
# # # #     print("You lose")
# # # #   else:
# # # #     print("You win")
# # # # else: print("Please type in one of the following: rock, paper, scissor")

# # # # Variables 
# # # name = "Mihir" ; print(type(name))
# # # print(isinstance(name, str))
# # # age = (21) 
# # # age += 50
# # # print((age * 3))

# # # print(isinstance(age, int))
# # # # The float changed the typeof the data type. now, isinstance == false, eventhough 21 is a number. 
# # # # complex for complex numbers
# # # # bool for booleans 
# # # # list for lists 
# # # # range for ranges 
# # # # dict for dictionaries
# # # # set for sets 
# # # # Math functions - prety much same as js. 5 //2 divides and rounds down to the nearest integer.  

# # # print(0 or 1)
# # # print (0 and 2)
# # # # IN the or operator, the first true statement will be printed. However in the second one, with and, both statements have to be true. This also means that if the first one is false, the code just stops reading and returns false. 

# # # # print("""    
# # # # This takes 
      
# # # #       several 

# # # #       lines
# # # # """). 

# # # print(len(name))
# # # # \ is the escape char. This can be useful to use a few special chars inside a print for example.

# # # print(name[0]) 
# # # print (name[0:5])

# # # # booleans  

# # # can_code = True

# # # if can_code:
# # #     print("You can code")
# # # else:
# # #     print("Learn coding boy!")


# # # book_1_read = True 
# # # book_2_read = False

# # # read_any_book = any([book_1_read, book_2_read])
# # # # returns true if EITHER one is true

# # # num = complex(2, 3)
# # # print(num.real, num.imag)

# # # print(abs(5.5))
# # # print(round(5.432343))

# # # from enum import Enum 

# # # class State(Enum):
# # #     INACTIVE = 0
# # #     ACTIVE = 1 

# # # print(State.ACTIVE.value)  

# # # # age1 = input("What is your age?")
# # # # print("You're age is " + age1)

# # # # Lists
# # # cars = ["lamborghini", "ferrari", "bugatti", "porsche"]
# # # print("lamborghini" in cars)
# # # print(cars[0:3])
# # # cars.extend(["Audi"])
# # # cars.insert(3, "mercedes")
# # # cars.sort()
# # # # the += can also be used , instead of the extend. 
# # # print(cars)

# # # # Tuples
# # # brands = ("Nike", "Adidas", "Puma", "POLO club")
# # # brands[-1]
# # # brands.index("Nike")
# # # len(brands)
# # # print("Nike" in brands)
# # # print(sorted(brands))
# # # print(brands)

# # # # Dictionaries 
# # # player = {"name" : 'Ronaldo' ,  "number": 7  , "goals" : 872}
# # # del player["goals"]
# # # print(player["name"])
# # # print(player["number"])
# # # print(player)

# # # # Sets 
# # # set1 = {"Mihir", "Avnith", "Appa" , "Amma" }
# # # set2 = {"Mihir"}


# # # intersect = set1 & set2
# # # print(intersect)

# # # def hello6(name="my friend!"):
# # #     if not name:
# # #         return
# # #     print('Hello! ' + name)

# # # hello6('Mihir')     
# # # hello6(False) # type: ignore       
# # # hello6()            

# # # # Global varibales like age = 9 can be accesses both my functions and other calls. However this only applies to those below. 
# # # # Anything inside the function won't change anything outside the function. This was the reason some of the projects needed debugging, even is js. 

# # # # Difference between a parameter and an argumnet. We pass an argumnet as informaiton when we call the function. The parameter is in the function, in this case the name="my friend". In an absence of argumnet, the parameter value can be the general one. Like the second one. 

# # # def counter():
# # #     count = 0

# # #     def increment():
# # #         nonlocal count
# # #         count += 1
# # #         return count

# # #     return increment  

# # # increment = counter()

# # # print(increment())  # 1
# # # print(increment())  # 2
# # # print(increment())  # 3

# # # # Objects - everything is an object

# # # items = [1, 2]
# # # items.append(3)
# # # print(id(items)) 

# # # #Loops
# # # condition = True
# # # while condition == True:
# # #     print("The condition is true")
# # #     condition = False 

# # # items1 = [2, 4, 6, 8, 10, 12]
# # # for index in enumerate(items1):
# # #     print(index, items1)
# # # # Use this for one of the math ones in the text book. 
# # # # Create a formula for N 

# # # class Dog:
# # #     def __init__(self, name, age):
# # #         self.name = name
# # #         self.age = age

# # #     def bark(self):
# # #         print("woof!")

# # # # Object creation (outside the class)
# # # roger = Dog("Roger", 8)

# # # # Checking type and accessing attributes
# # # print(type(roger))       # <class '__main__.Dog'>
# # # print(roger.name)        
# # # roger.bark()             

# # # # from Learning_Python import swim1
# # # # print(swim1)

# # # # You can import many different modules that add to the funcitonality. 
# # # import math
# # # print(math.sin(87))

# # # import sys
# # # name7 = sys.argv[1]
# # # print("Hello " + "" + name7)

# # # import argparse


# # # # Accepting Arguments
# # # import argparse

# # # parser = argparse.ArgumentParser(
# # #     description='This program prints the name of my dogs'
# # # )

# # # parser.add_argument('-c', '--color', metavar='color', required=True, choices={'red', 'yellow'}, help='the color to search for')

# # # args = parser.parse_args()

# # # print(args.color)

# # # # Lamda functions 
# # # lambda num : num * 2
# # # multiply = lambda a,b : a* b
# # # print(multiply(2, 92))


# # # numbers = [1, 2, 3, 4, 5]
# # # def double(a):
# # #     return ((a*a) + 3 )
# # # result = map(double, numbers)
# # # print(list(result))

# # # result2 = map(lambda a:a *2 , numbers)
# # # print(list(result2))

# # # def isEven(n):
# # #     return n % 2 == 0

# # # result3 = filter(isEven, numbers)
# # # print(list(result3))

# # # expenses = [('food' , 120), ('clothes', 80)]
# # # from functools import reduce
# # # # sum = reduce(lambda a , b: a[1] + b[1], expenses)
# # # sum = reduce(lambda acc, item: acc + item[1], expenses, 0)
# # # print(sum) 

# # # # Recursion 
# # # # 3! = 3 * 2 * 1 
# # # def factorial(n):
# # #     if n == 1 : return 1 
# # #     return n * factorial(n-1)
# # # print(factorial(3))
# # # print(factorial(5))

# # # def logtime(func):
# # #     def wrapper():
# # #         print("before")
# # #         val = func()
# # #         print("after")
# # #         return val
# # #     return wrapper

# # # @logtime
# # # def hello():
# # #     print("hello") 

# # #     # Docstrings
# # # # They are like comments but have more purpose. They can for example display information in the console. They are written with """ Mihir """ 

# # # # Annotations 
# # # # def increment(n : int) -> int:
# # # #     return n + 1
# # # # count2: int = 2 

# # # # Exceptions- like try and catch in js to catch error

# # # try:
# # #     result4 = 1 / 0
# # # except ZeroDivisionError:
# # #     print("You can't divide by zero!")
# # # else:
# # #     # This runs only if no exception was raised in the try block
# # #     print("Division successful:", result4) 
# # #     # You can also create errors with class Exception(exception)

# # #     # pip - python index package - pypi.org 

# # #     numbers0 = [1, 2, 3, 4, 5, 6]
# # #     numbers0_power_2 = [n**2 for n in numbers0]
# # #     print(numbers0_power_2)
    
# # #     # Polymorphism - it allows objects of different classes to be treated through the same interface, even if they behave differently. Like "extends" in js. 

# import random

# # Random suit and rank
# suits = ["hearts", "diamonds", "clubs", "spades"]
# ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

# random_suit1 = random.choice(suits)
# random_rank1 = random.choice(ranks)
# computer_choice1 = random_rank1 + " of " + random_suit1
# print("Computer's first card is:", computer_choice1)

# random_suit2 = random.choice(suits)
# random_rank2 = random.choice(ranks)
# computer_choice2 = random_rank2 + " of " + random_suit2
# print("Computer's second card is:", computer_choice2)

# your_rank1 = random.choice(ranks)
# your_suit1 = random.choice(suits)
# your_card1 = your_rank1 + " of " + your_suit1
# print("Your first card is:", your_card1)

# # Second card
# your_rank2 = random.choice(ranks)
# your_suit2 = random.choice(suits)
# your_card2 = your_rank2 + " of " + your_suit2
# print("Your second card is:", your_card2)

# rank_value = {
#     "A": 11, "2": 2, "3": 3, "4": 4, "5": 5,
#     "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
#     "J": 10, "Q": 10, "K": 10
# }

# your_choice_value = rank_value[your_rank1] + rank_value[your_rank2]
# computer_choice_value = rank_value[random_rank1] + rank_value[random_rank2]

# # defaults so these names exist even if player stands immediately
# New_choice_value = your_choice_value
# New_computer_choice_value = computer_choice_value

# print("The computer hand is worth:", computer_choice_value)
# print("Your hand is worth:", your_choice_value)

# player_choice = input("Do you want to Hit or Stand? ").strip().lower()

# if player_choice == "hit":
#     if computer_choice_value >= 14:
#         print("Computer chooses to stand.")
#     else:
#         random_suit4 = random.choice(suits)
#         random_rank4 = random.choice(ranks)
#         computer_choice4 = random_rank4 + " of " + random_suit4
#         print("Computer's third card is:", computer_choice4)
#         New_computer_choice_value = computer_choice_value + rank_value[random_rank4]

#     your_suit3 = random.choice(suits)
#     your_rank3 = random.choice(ranks)
#     your_choice3 = your_rank3 + " of " + your_suit3
#     New_choice_value = (
#         rank_value[your_rank1] 
#       + rank_value[your_rank2] 
#       + rank_value[your_rank3]
#     )

#     print("Your third card is:", your_choice3)
#     print("Your value is now: " + str(New_choice_value))

# elif player_choice == "stand":
#     if computer_choice_value >= 14:
#         print("Computer chooses to stand.")
#     else:
#         random_suit3 = random.choice(suits)
#         random_rank3 = random.choice(ranks)
#         computer_choice3 = random_rank3 + " of " + random_suit3
#         print("Computer's third card is:", computer_choice3)
#         New_computer_choice_value = computer_choice_value + rank_value[random_rank3]

# else:
#     print("Please choose between Stand and Hit")

# if New_choice_value == 21:
#     print("You won")
# elif New_choice_value > 21:
#     print("You lost")
# elif computer_choice_value == 21:
#     print("Computer WON!")
# elif New_computer_choice_value == New_choice_value:
#     print("Game is a tie! Start again!")
# elif New_computer_choice_value > New_choice_value:
#     print("Computer won")
# elif New_choice_value > New_computer_choice_value:
#     print("You Won!")
# else:
#     print("")

# # Number guessing game 
# # import random
# # import math
# # random_decimal = random.random()
# # computer_number = math.floor(((random_decimal * 100) + 1))
# # print(computer_number)
# # guesses = 0



# # while True:
# #     player_number = int(input("Please guess a number between 1-100: "))
# #     guesses += 1

# #     if player_number == computer_number:
# #         print(f"You guessed the number in {guesses} guesses!")
# #         break  # ✅ Valid here because it is indented inside the loop

# #     elif player_number > computer_number:
# #         print("Guess a lower number!")

# #     else:
# #         print("Guess a higher number!")

# # Mortgage interest calculator
# # import math

# # interest_rate = float(input("What's your interest rate? (in %)  "))
# # actual_interest_rate = (interest_rate/100)
# # amount = float(input("What's the total amount of loan?  "))
# # currency = input("What is the currency?  ")
# # interest = actual_interest_rate * amount

# # print(f'You will be paying {interest} {currency} in interest')

# # import math
# # user_input = input("Please choose a unit of measurement you want to convert from (inch, cm): ").lower()
# # user_choice = input("What do you want to convert to? (inch, cm): ").lower()

# # def convert():
# #     if user_input == "inch" and user_choice == "cm":
# #          inch_value = float(input("Enter the value of inches you want to convert: "))
# #          final_inch_value = inch_value * 2.54
# #          print(f"{inch_value} inches is approxiamtley {final_inch_value} in cm")

# #     elif user_input == "cm" and user_choice == "inch":
# #           cm_value = float(input("Enter the value of cm you want to convert:  ")) 
# #           final_cm_value = (cm_value/2.54)
# #           print(f"{round(cm_value, 1)} cm is approximately {round(final_cm_value, 1)} in inches")
# #     else:
# #           print("Please choose a valid option!")

# # convert()
     
# x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

# for element in x:
#     y = 34 + 23 * element
#     if y > 200:
#         print(y)

# # Formula to calculate the derivative
# import math
# function_input = float(input("What function do you want to derive?. Use only (x)  "))
# print(function_input)


# count = 0
# numbers = [10, 20, 30, 50, 25, 2, 34, 5, 99]
# for number in numbers:
#     increased = number * (1 + 0.03)
#     print(increased)
#     count +=1
#     print(count)


# #  xxxxxx
# import math
# print(list(range(0,10)))
# for i in range(13):
#     print(i**3 + i**2 + 34 * i)

import math
# Current_Value = 10000
# interest_rate = 3
# interest = Current_Value * interest_rate / 100
# FV = float(Current_Value * (1 + interest_rate / 100))
# print(FV)

# FV = float(5000 * (1.0435) ** 3)
# print(FV)

# FV = (CV * (1 + i) ** y)
# Rearragning this  formula gives: 
# CV = FV/ (1 + i) ** y

# FV = (5500 - 5000) / 4 
# CFV = (FV/ 5000) * 100
# print(f"The interest rate is {CFV} % ")

NPV = 0
cf = [-15000, 5000, 7000, 10000]
f = 1.05
for i in range(4):
   NPV += cf[i] / f**(i)
   print(NPV)

total = 0
for i in c
   total += i
   print(total)
   print(len(cf))

import pandas as pd
titanic = pd.read_csv("titanic.csv")
pd.options.display.min_rows = 20
print(titanic)