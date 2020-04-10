// Project Dependencies
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
// API Objects
const flux = require('../api/practicalTest_api');

Given(/^a user perform a GET call$/, async () => {
  this.response = await flux.getData();
});

When('returns the total number of {int} named brands of used cars', (number) => {
  this.category = this.response.Category.Subcategories.Category;
  expect(this.category.length).to.equal(number);
  console.log('Return number of Named brands are ', this.category.length);
});

Then('the total number of {string} found and return is {int}', (carBrand, size) => {
  let totalNumberOfKia = 0;
  for (let i = 0; i < this.category.length; i += 1) {
    if (this.category[i].Name === carBrand) {
      totalNumberOfKia += 1;
    }
  }

  expect(totalNumberOfKia).to.equal(size);
  console.log('Return number of Kia ', totalNumberOfKia);
});

Then('the search did not return any usef car with the name {string}', (carName) => {
  for (let i = 0; i < this.category.length; i += 1) {
    expect(this.category[i].Name).to.not.equal(carName);
  }
});
