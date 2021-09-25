const parser = require('fast-xml-parser');
const he = require('he');
const { expect } = require('chai');

const { createHeader } = require('../../support/utils/helpers');
const { requestService } = require('../../support/core/service_request');

const options = {
  attributeNamePrefix: '@_',
  attrNodeName: 'attr', // default is 'false'
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: '__cdata', // default is 'false'
  cdataPositionChar: '\\c',
  parseTrueNumberOnly: false,
  arrayMode: false, // "strict"
  attrValueProcessor: (val) => he.decode(val, { isAttributeValue: true }),
  tagValueProcessor: (val) => he.decode(val),
  stopNodes: ['parse-me-as-string']
};

const url = 'https://api.trademe.co.nz/v1/Categories/UsedCars.xml';
/**
 *
 * @returns {object} selected item
 */
const getData = async () => {
  try {
    const response = await requestService.get(url, createHeader());
    expect(response.statusCode).to.equal(200);
    const tObj = parser.getTraversalObj(response.body, options);
    return parser.convertToJson(tObj, options);
  } catch (error) {
    console.log('error in Get Data ', error);
    throw error;
  }
};

module.exports = {
  getData
};
