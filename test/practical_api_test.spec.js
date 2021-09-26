/* eslint-disable no-unused-expressions */
// Project Dependencies

const { expect } = require('chai');
// API Objects
const iagTest = require('./test/api/practicalTest_api');

const { CARS } = require('./support/constants/constants');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const usernameGenerator = `test${getRandomInt(10)}IAG${getRandomInt(10)}`;

describe('Running test for the interview', () => {
  it('create new user', async () => {
    console.log(usernameGenerator);
    await iagTest.createNewUser(usernameGenerator, 'IAG', 'Test', 'Test1234$');
    this.response = await iagTest.getToken(usernameGenerator, 'Test1234$');
    this.bearerToken = `${this.response.token_type} ${this.response.access_token}`;
  });

  it('Get Dashboard content', async () => {
    const getDashboardResponse = await iagTest.getDashboard(this.bearerToken);

    // Verify Top Make data
    expect(getDashboardResponse.make.id).to.equal('c4u1mqnarscc72is00e0');
    expect(getDashboardResponse.make.name).to.equal('Lamborghini');
    expect(getDashboardResponse.make.image).to.equal('Lamborghini-Logo.png');
    expect(getDashboardResponse.make.votes).to.not.equal(0);

    // Verify Top Model data
    expect(getDashboardResponse.model.id).to.equal('c4u1mqnarscc72is00e0|c4u1mqnarscc72is00kg');
    expect(getDashboardResponse.model.make).to.equal('Lamborghini');
    expect(getDashboardResponse.model.name).to.equal('Diablo');
    expect(getDashboardResponse.model.image).to.equal('Diablo.jpg');
    expect(getDashboardResponse.model.votes).to.not.equal(0);
  });

  it('Get Current user details', async () => {
    const getCurrentUserResponse = await iagTest.getCurrentUser(this.bearerToken);
    expect(getCurrentUserResponse.firstName).to.equal('IAG');
    expect(getCurrentUserResponse.lastName).to.equal('Test');
    expect(getCurrentUserResponse.isAdmin).to.false;
  });

  it('Get Current user Profile', async () => {
    const getCurrentUserProfileResponse = await iagTest.getCurrentUserProfile(this.bearerToken);
    expect(getCurrentUserProfileResponse.username).to.equal(usernameGenerator);
    expect(getCurrentUserProfileResponse.firstName).to.equal('IAG');
    expect(getCurrentUserProfileResponse.lastName).to.equal('Test');
    expect(getCurrentUserProfileResponse.gender).to.equal('');
    expect(getCurrentUserProfileResponse.age).to.equal('');
    expect(getCurrentUserProfileResponse.address).to.equal('');
    expect(getCurrentUserProfileResponse.phone).to.equal('');
    expect(getCurrentUserProfileResponse.hobby).to.equal('');
  });

  it('Get Car Model Votes and details', async () => {
    const getModelDetailsResponse = await iagTest.getModelDetails(this.bearerToken,
      CARS.zondaCarMaker, CARS.zondaCarModelPagani);
    expect(getModelDetailsResponse.name).to.equal('Zonda');
    expect(getModelDetailsResponse.description).to.contains('The evolution of the species');
    expect(getModelDetailsResponse.image).to.equal('zonda.jpg');
    expect(getModelDetailsResponse.makeId).to.equal(CARS.zondaCarMaker);
    expect(getModelDetailsResponse.canVote).to.be.true;
  });
});
