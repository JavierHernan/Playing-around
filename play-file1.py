print("Hello")

#declare a variable
age = 29
name = "Javier"
height = 5.8
is_tough = True
x, y, z = 1, 2, 3
# write a function
def addNums(num1, num2):
    return num1 + num2
print(f"{addNums(5, 5)} is the result of adding two numbers together")

# write a conditional
if age > 25:
    print(f"{name}, is older than 25")
elif age == 25:
    print(f"{name}, is 25")
else:
    print(f"{name}, is less than 25")

if name == "Javier" and age == 29:
    print("Javier is 29")

if height == 5.9 or is_tough == True:
    print("You are either 5.9 or you are tough")

# lambda functions - small anonymous functions for quick one time use
# add = lambda x, y: x + y
# print(add(3,5))

people = [('Joe', 29), ('Donald', 75),('Barack', 60)]
sorted_people = sorted(people, key=lambda x: x[1])
print(sorted_people)

#Generator Functions (yield)

#keyword arguments in functions

python3 play-file1.py