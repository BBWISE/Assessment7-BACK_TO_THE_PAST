# Assessment7-BACK_TO_THE_PAST
This is a Javascript programme which helps to address the Assessment Problem (Back To The Past) using INHERITANCE as an Object Oriented Programming (OOP) Concept.
## Programme Structure:
In this programme, there exists two different classes named:
### 1.  inheritedProperties:
This class represents all Properties inherited by IVAN as described in the problem's statement
It also a constructor of itselt which takes one argument (X) representing the total amount of money inherited by IVAN and passes the value to a self generated variable (Global class variable called X).
The class in question also contains a method call timeMachine which takes 'year' and 'age' as arguments to help perform the necessary calculation (prediction) of the remaining money after a given numbers of years with respect to IVAN's age.
### 2.  Ivan:
The 'Ivan' class as expected inherits the 'inheritedProperies' class (See the attached PowerPoint file for more details).
This class has it own constructor taking 'inheritedMoney' and 'year' as arguments, creates a global class variable for the value in the 'year' variable alongside the age global class variable and later pass-in the value present in the 'inheritedMoney' varable to the inherited class (inheritedProperties).
The function of the moneyCapacity() method in this class is to send the values of 'year' and 'age' global class variables in the constructor to the 'timeMachine()' method in the inherited class above and to help return the corresponding result statement after the money capacity had been evaluated.
