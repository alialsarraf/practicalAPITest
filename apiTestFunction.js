/* eslint-disable no-unused-expressions */
// Project Dependencies
const { expect } = require('chai');
// API Objects
const flux = require('./features/testCoverage/api/practicalTest_api');


async function hello() {
  const response = await flux.getData();
  const category = response.Category.Subcategories.Category;
  console.log('Return number of Named brands are ', category.length);
  let totalNumberOfKia = 0;
  let bool = false;
  for (let i = 0; i < category.length; i += 1) {
    if (category[i].Name === 'Kia') {
      totalNumberOfKia += 1;
    }

    if (category[i].Name === 'Hispano Suize') bool = true;
  }

  console.log('Return number of Kia ', totalNumberOfKia);

  try {
    expect(bool, 'Looks Hispano Suize exist in the list!!!').to.be.false;
    console.log('Hispano Suize does not exist in the search list');
  } catch (error) {
    console.log(error);
  }
}

hello();
