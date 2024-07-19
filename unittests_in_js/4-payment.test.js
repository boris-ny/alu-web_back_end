const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

// using stubs on top of spies

describe('sendPaymentRequestToApi', () => {
  it('check if numbers round with stubs and spies', () => {
    const calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
