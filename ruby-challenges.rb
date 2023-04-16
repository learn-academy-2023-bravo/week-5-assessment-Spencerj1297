# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# # --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# ## Define a new method called word_checker
# ## This method will have 2 parameters, one for the array of strings called array, and one called 'letter' for the variables storing strings
# ## define a new varialbe inside the method called new_array that will store the array with .select attached. 
# ## .select works similarly to .filter in JavaScript
# ## call the value string to help the flow of the code.
# ## create an If statement that will act as the logic for the .select.
# ## using the string value with .include? attached to check for the letter parameter.
# ## return the string 
# ## add an else statement with returns nil 
# ## Before the last end do a final return of new_array to display all the strings needed. e 

def word_checker array, letter
  new_array = array.select do |string|
    if string.include?(letter)
     string
    else
      nil
    end
  end
  return new_array
end

p word_checker(beverages_array, letter_o)
p word_checker(beverages_array, letter_t)

# # ["coffee", "soda water"]
# # ["tea", "water", "soda water"]


# # -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# # HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# ##Puesdo Code
# ## Define a new method called combie_sort and give it one parameter called 'hash'
# ## To target the values in the hash do hash.values.
# ## Add .flatten which will combine all of the hash values together.
# ## Last use the Ruby method .sort which will place each string in alphabetical order. 


def combine_sort hash
  hash.values.flatten.sort
end

p combine_sort(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
## Puesdo Code
## Create a new class call Bike
## def initialize model, wheels , and current_speed
## set the starting number of wheels to 2 and the current_speed to 0 
## To display this info like the expected output use double quotations for string interpelation.
## "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}"
## Dont forget to include all the ends and check for appropiate indentation.
## Outside of the Class start a new instance of the Bike Class by by storing Bike.new in a variable with the correct amount of argumnets.
## For the second part of this quesiton def a new method called pedal_faster
## To make this method increase the speed just add 10 to the current_speed 
## Create another method called brake.
## To make any speed slow to 0, multiply the current_speed by 0.


class Bike 
  attr_accessor :model, :wheels, :current_speed
  def initialize(model, wheels = 2, current_speed)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}"
  end
  def pedal_faster
    @current_speed + 10
  end
  def brake
    @current_speed * 0 
  end
end

new_bike = Bike.new('Trek', 2, 18)

p new_bike.pedal_faster


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
