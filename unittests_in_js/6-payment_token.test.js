const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a promise', (done) => {
    const result = getPaymentTokenFromAPI(true);
    result
      .then((response) => {
        expect(response).to.eql({
          data: 'Successful response from the API',
        });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
