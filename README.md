# Practical Test (API) Project

## Project Outline

This project is a simple API automation framework BDD that uses CucumberJS, Request Promise Native, Chai, and Cucumber-html Reporter which are a collection java scripts librarys as it's core components.

* [CucumberJS](https://github.com/cucumber/cucumber-js): is a javascript version of Cucumber/Gherkin library, which present a test scenario that is readble and easy access to any person who is not much into coding or able to read line of code. 
It Provide a very highlevel understanding of a test case, shown in simple English term.

* [Request Promise Native](https://github.com/request/request-promise-native): The simplified HTTP request client 'request' with Promise support. Which can help us in triggering all the requests calls similar to what you can do when using Postman or any similar request triggering libraries.

* [Chai](https://www.chaijs.com/): is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

* [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter#readme): is a simple Html report generator that convert the generated CucumberJS .Json report to an html viewable report.

* [fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser): is an XML parser, as the call returned from the TradeMeSandbox is XML and not a JASON file.


## Getting Started
There are two ways to run the project, by openning a bash command line (if running in windows or regular commandline on linux)

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
npm run report
npm run apiTestFunction
```
Note:
Assuming your machine alraedy got all required NodeJS and NPM files installed and up to date to latest verion.
* Windows running on NodeJS v12.16.1 and NPM v6.13.4
* Linux running on NodeJS v13.12.0 and NPM v6.14.4, if you got 
```
bash: ./runProject.sh: Permission denied
```
run the following command
```
chmod u+x ./runProject.sh
./runProject.sh
```

## Code Sturcture

The code structure follows the basic setup presented by [CucumberJS](https://github.com/cucumber/cucumber-js). 
* Cucumber.js located in the root folder, contains the main configuration needed to be able to start and run the tests. 

* features: will contains the following folders
   * reports: will contains the generated report after each run, it's a json generated report.
   
   * support: handles all re-usable or setup files needed for the project and 
   make it easy to re-use the code as needed.
     * Constants: Contain all constant data that we might need to re-use in any part of the code.
     * Core: Contains the core Project Native Promise calls, which make it easier for us to create and trigger any REST calls when needed.
     * Resources: Contains a set of JSON files, that we need to use as either payload or compare responses.
     * Utils: a utitlity folder contains any files we need and feels it can be stored under this folder.
     * init.js: Is a cucumberJS initiation file to override any default value or start our custom world object

   * testCoverage: Contains all test related files
       * API: Contains all the API calls that are shown in the design document, in our case is the test guideline given to me.
       * Features: Conains all the Cucumber/Gherkin tests
       * Step_defintions: Contains the code that combines both Features and API code
* apiTestFunction: is just a smple Javascript code running the same code uses in the feature file but it is running with CucumberJS and with minimal verification for only returning the requriments as shown in the Flux Exercise sheet
