// Project Dependencies
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
// API Objects
const flux = require('../api/practicalTest_api');

Given(/^a user perform a GET call$/, async () => {
  this.response = await flux.getData();
});

When(/^the response return a statusCode of 200$/, () => {
  this.category = this.response.Category.Subcategories.Category;
  expect(this.category.length).to.equal(76);
});

Then(/^the total number of item return is equal to (\d+)$/, (size) => {
  let j = 0;
  for (let i = 0; i < this.category.length; i += 1) {
    if (this.category[i].Name === 'Kia') {
      j += 1;
    }
  }

  expect(j).to.equal(size);
});

Then(/^each item has a fields object with a defined title$/, () => {
  for (let i = 0; i < this.category.length; i += 1) {
    expect(this.category[i].Name).to.not.equal('Hispano Suize');
  }
});
