# Practical Test (API) Project

## Agile Test Approach 
For this project, I broke down the test approach as follow:

* Test first the UI and understand the basic use journey of what the website try to provide.
* Breakdown all the UI functionality and highlight what I believe is an issue or working as expected based on my previous experience. 
* From the UI, I open the Google Developer tool and monitor all the API calls and see the level of functionality of the API and see what can be consider as an issue or expected.


## Bug Report

UI Issues:

* Car details: When clicking on the car image, it takes you back to the dashboard. This can be expected feature but I felt like the image will .
* Profile Update: 
* Maker Page: User not able to return to dashboard when clicking Rating Buggy logo on top of the page from the Makers Page. For example if you proceed to Lamborghini page and you click on Rating Buggy, the user remain on the maker page and on the bottom left corner you will see the URL with \broken.
* Make Page: Found a few issues
  * Model and Rank toggles doesn't do anything. Taking the behavior the buttons are clickable 
  * Votes, change the ordering on random, instead of ascending or descending order. Checking the Network call, the API call is set to return the order on random.
*  


API Issues:

* Update Profile: If I added a text instead of a number as age, I get a 502 system error in the API call. 
But I can see the UI is doing inline error message which cover this issue. The API should return a value 400 error, as it can exposed as its own to a different UI. We need to consider each code as its own product and can function as expected.

## Automation Test coverage

The five top critical functionality we can cover in the API level testing will

* Registration
* Login
* User Profile update
* Voting
* Dashboard

Note:
  * The test will create a new user in every flow, I would prefer using a proper cleanup step to delete the user completely, but with the lack of full openApi or API document.  
## Project Outline ---- STILL NEED WORK

This project is a simple API automation framework that Request Promise Native, and Chai which are a collection java scripts library's as it's core components.

* [Mocha](https://mochajs.org/): Is the main core of this example test framework, it is a popular JavaScript test framework, running on Node.JS and in the browser.

* [Request Promise Native](https://github.com/request/request-promise-native): The simplified HTTP request client 'request' with Promise support. Which can help us in triggering all the requests calls similar to what you can do when using Postman or any similar request triggering libraries.

* [Chai](https://www.chaijs.com/): is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any JavaScript testing framework.

* [Mochawesome](https://www.npmjs.com/package/mochawesome): is a custom reporter for use with the JavaScript testing framework, mocha.

## Getting Started
There are two ways to run the project, by lunching the bash command line (Tested only on Windows but it should run perfectly on Linux)

* Run 
```
./runProject.sh
```
 This will run the installation of all dependencies, linting, test, and generate the report

* Run each script individually

```
npm i
npm run lint
npm run test
```
Note:
Assuming your machine already got all required NodeJS and NPM files installed and up to date to latest version.
* Windows running on NodeJS v16.10.0 and NPM v7.24.1
 
```
bash: ./runProject.sh: Permission denied
```
run the following command
```
chmod u+x ./runProject.sh
./runProject.sh
```

## Code Structure

The code structure follows the basic setup.
   
   * support: handles all re-usable or setup files needed for the project and 
   make it easy to re-use the code as needed.
     * Constants: Contain all constant data that we might need to re-use in any part of the code.
     * Core: Contains the core Project Native Promise calls, which make it easier for us to create and trigger any REST calls when needed.
     * Resources: Contains a set of JSON files, that we need to use as either payload or compare responses.
     * Utils: a utility folder contains any files we need and feels it can be stored under this folder.
   * testCoverage: Contains all test related files
       * API\practicalTest_api: Contains all the API calls that are shown in the design document, in our case is the test guideline given to me.
       * practical_api_test.spec: Is the test file that contains all our test scenarios
