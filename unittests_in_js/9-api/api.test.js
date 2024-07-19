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

describe('GET /cart/:id', () => {
  it('404 - Id is not a number', (done) => {
    request('http://localhost:7865/cart/anything', (error, response, body) => {
      if (error) throw new Error(error);
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Id is not a number');
      done();
    });
  });

  it('200 - Payment methods for cart 1', (done) => {
    request('http://localhost:7865/cart/1', (error, response, body) => {
      if (error) throw new Error(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });
});
