/* eslint-disable no-unused-expressions */
// Project Dependencies

const { expect } = require('chai');
// API Objects
const iagTest = require('./test/api/practicalTest_api');

describe('Running test for the interview', () => {
  before('Getting the Bearer Token for each API call', async () => {
    this.response = await iagTest.getToken();
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
    expect(getCurrentUserResponse.firstName).to.equal('Iag');
    expect(getCurrentUserResponse.lastName).to.equal('Test 2');
    expect(getCurrentUserResponse.isAdmin).to.false;
  });

  it('Get Current user Profile', async () => {
    const getCurrentUserProfileResponse = await iagTest.getCurrentUserProfile(this.bearerToken);
    expect(getCurrentUserProfileResponse.username).to.equal('iagtest2');
    expect(getCurrentUserProfileResponse.firstName).to.equal('Iag');
    expect(getCurrentUserProfileResponse.lastName).to.equal('Test 2');
    expect(getCurrentUserProfileResponse.gender).to.equal('test');
    expect(getCurrentUserProfileResponse.age).to.equal('3');
    expect(getCurrentUserProfileResponse.address).to.equal('');
    expect(getCurrentUserProfileResponse.phone).to.equal('');
    expect(getCurrentUserProfileResponse.hobby).to.equal('Video Games');
  });
});
