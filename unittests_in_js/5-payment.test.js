const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const sendPaymentRequestToApi = require('./5-payment');

// use a beforeEach and a afterEach hooks to complete this exercise

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log 120 if a = 100 and b = 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('should log 20 if a = 10 and b = 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
