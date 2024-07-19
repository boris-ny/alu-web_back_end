const request = require('request');
const chai = require('chai');
const { expect } = require('chai');
const { describe } = require('mocha');

describe('server', () => {
  it('Index Page', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) throw new Error(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
