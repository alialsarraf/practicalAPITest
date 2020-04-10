Feature: This feature file will cover the test scenario for the API call
         covered in the Practical Test (API)
         Current Acceptance Criteria for the tests will be declared in the BDD



@smoke
Scenario: Assert the Acceptanc Criteria are correct when perform a GET call
 Given a user perform a GET call
  And the response return a statusCode of 200
  Then the total number of item return is equal to 1  
  And each item has a fields object with a defined title





 