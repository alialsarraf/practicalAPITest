Feature: This feature file will cover the test scenario for the API call
         covered in the Practical Test (API)
         Current Acceptance Criteria for the tests will be declared in the BDD



@smoke
Scenario: Assert the Acceptanc Criteria are correct when perform a GET call
 Given a user perform a GET call
  And returns the total number of 76 named brands of used cars
  Then the total number of 'Kia' found and return is 1  
  And the search did not return any usef car with the name 'Hispano Suize'





 