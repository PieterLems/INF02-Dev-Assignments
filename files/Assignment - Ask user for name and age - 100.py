name = input("Hello whats ur name?")
age = int(input("Whats ur age?"))
current_year = 2017
number =int(input("how many time do you want to print the outcome"))

i = input("want to know when u turn 100? y/n")


for x in range(number):
    if i == "y":
        print ("you will turn 100 in the year \n"  + str(current_year - age + 100))
    else:
        print ("okay bye")


# use for somethin in range (something) if you want to print lines on seperate linenumbers