const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber when calculating the total', () => {
    const calculateSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentToApi(100, 20);
    expect(calculateSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
