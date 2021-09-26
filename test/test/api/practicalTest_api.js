const { expect } = require('chai');

const { createHeader } = require('../../support/utils/helpers');
const { requestService } = require('../../support/core/service_request');
const { HEADER } = require('../../support/constants/constants');

const url = 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/';

const getToken = async () => {
  try {
    const response = await requestService.postForm(`${url}oauth/token`, createHeader());
    expect(response.statusCode).to.equal(200);
    return response.body;
  } catch (error) {
    console.log('error in Get Access Token ', error);
    throw error;
  }
};

const getDashboard = async (authorization) => {
  try {
    const response = await requestService.get(`${url}dashboard`, createHeader(HEADER.AUTHORIZATION, authorization));
    expect(response.statusCode).to.equal(200);
    return response.body;
  } catch (error) {
    console.log('error in Get User dashboard ', error);
    throw error;
  }
};

const getCurrentUser = async (authorization) => {
  try {
    const response = await requestService.get(`${url}/users/current`, createHeader(HEADER.AUTHORIZATION, authorization));
    expect(response.statusCode).to.equal(200);
    return response.body;
  } catch (error) {
    console.log('error in Get Current User details ', error);
    throw error;
  }
};

const getCurrentUserProfile = async (authorization) => {
  try {
    const response = await requestService.get(`${url}/users/profile`, createHeader(HEADER.AUTHORIZATION, authorization));
    expect(response.statusCode).to.equal(200);
    return response.body;
  } catch (error) {
    console.log('error in Get User Profile details ', error);
    throw error;
  }
};

const postModelVote = async (authorization, message) => {
  try {
    const body = { comment: message };
    const response = await requestService.post(`${url}models/c4u1mqnarscc72is00e0|Cc4u1mqnarscc72is00jg/vote`, createHeader(HEADER.AUTHORIZATION, authorization), body);
    expect(response.statusCode).to.equal(200);
    return response.body;
  } catch (error) {
    console.log('error in POST Users vote ', error);
    throw error;
  }
};

module.exports = {
  getToken,
  getDashboard,
  getCurrentUser,
  getCurrentUserProfile,
  postModelVote
};
