const rp = require('request-promise-native');

const httpRequests = {

  callRequest: (requestMethod, requestUri, header, full, requestBody) => {
    const httpOptions = {
      method: requestMethod,
      uri: requestUri,
      headers: header,
      resolveWithFullResponse: full,
      json: true,
    };

    if (requestBody !== '') {
      httpOptions.body = requestBody;
    }

    return rp(httpOptions);
  },
};

const requestService = {
  get: (uri, header, full = true) => httpRequests.callRequest('GET', uri, header, full, ''),
  post: (uri, header, requestBody) => httpRequests.callRequest('POST', uri, header, true, requestBody),
  delete: (uri, header) => httpRequests.callRequest('DELETE', uri, header, true, ''),
  deleteWithBody: (uri, header, requestBody) => httpRequests.callRequest('DELETE', uri, header, true, requestBody),
  put: (uri, header, requestBody) => httpRequests.callRequest('PUT', uri, header, true, requestBody)
};

exports.requestService = requestService;
