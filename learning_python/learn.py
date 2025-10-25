# import random

# # Static card
# suit = "hearts"
# rank = "K"
# value = 10 

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
#       "A": 11, "2": 2, "3": 3, "4": 4, "5": 5,
#     "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
#     "J": 10, "Q": 10, "K": 10}

# your_choice_value = rank_value[your_rank1] + rank_value[your_rank2]
# computer_choice_value = rank_value[random_rank1] + rank_value[random_rank2]

# print("The computer hand is worth: ", computer_choice_value)
# print("Your hand is worth:", your_choice_value)

# player_choice = input("Do you want to Hit or Stand? ").strip().lower()

# if player_choice == "hit":

#     if computer_choice_value >= 14:
#         print("Computer chooses to stand.")
#     elif computer_choice_value < 14:
#         random_suit4 = random.choice(suits)
#         random_rank4 = random.choice(ranks)
#         computer_choice4 = random_rank4 + " of " + random_suit4
#         print("Computer's third card is:", computer_choice4)
#         New_computer_choice_value = computer_choice_value + [random_rank4] 

#     your_suit3 = random.choice(suits)
#     your_rank3 = random.choice(ranks)
#     your_choice3 = your_rank3 + " of " + your_suit3
#     New_choice_value = rank_value[your_rank1] + rank_value[your_rank2] + rank_value[your_rank3]

#     print("Your third card is:", your_choice3)
#     print("Your value is now: " + str(New_choice_value))


# elif player_choice == "stand":
#     if computer_choice_value >= 14:
#         print("Computer chooses to stand.")

# elif computer_choice_value < 14:
#         random_suit = random.choice(suits)
#         random_rank = random.choice(ranks)
#         computer_choice3 = random_rank3 + " of " + random_suit3
#         print("Computer's third card is:", computer_choice3)

# else:
#     print("Please choose between Stand and Hit")


# if  New_choice_value == 21:
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

