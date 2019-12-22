# simple_test
Simple test framework for UI tests with WebdriverIO.

**Concepts Included**

* Parallel test runs

* Page Object pattern

* Common web page interaction methods


**Tools**

* WebdriverIO

* Mocha

* Chai

* Allure report 

**Requirements**

In order to utilise this project you need to have the following installed locally:

* NodeJS > 8

* Chrome and Chromedriver

**Usage**

* To run all tests 

   `nmp test `
   
* To run some test only

  ` wdio wdio.conf.js --spec .<path to test file> `

**Reporting**

To create report use Allure report, report data is stored in `allure-results`
folder.
 
Сreate a report using a script `allure serve allure-results `
 
