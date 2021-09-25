/* eslint-disable no-unused-expressions */
// Project Dependencies

const { expect } = require('chai');
// API Objects
const iagTest = require('./test/api/practicalTest_api');

describe('Running test for the interview', () => {
  before('a user perform a GET call', async () => {
    this.response = await iagTest.getData();
  });

  it('returns the total number of {int} named brands of used cars', () => {
    this.category = this.response.Category.Subcategories.Category;
    expect(this.category.length).to.equal(76, 'number of branded cars does not match.');
    console.log('Return number of Named brands are ', this.category.length);
  });

  it('the total number of {string} found and return is {int}', () => {
    const carBrand = 'kia';
    const size = 0;
    let totalNumberOfKia = 0;
    for (let i = 0; i < this.category.length; i += 1) {
      if (this.category[i].Name === carBrand) {
        totalNumberOfKia += 1;
      }
    }

    expect(size).to.equal(totalNumberOfKia, `The Total number of ${carBrand} does not match or does not exist in the search result.`);
    console.log('Return number of Kia ', totalNumberOfKia);
  });

  it('the search did not return any usef car with the name {string}', () => {
    const carBrand = 'Hispano Suize';
    let bool = false;
    for (let i = 0; i < this.category.length; i += 1) {
      if (this.category[i].Name === carBrand) bool = true;
    }

    expect(bool, `Looks ${carBrand} exist in the list!!!`).to.be.false;
  });
});
