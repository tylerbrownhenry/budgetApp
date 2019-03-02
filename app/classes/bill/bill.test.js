import Bill from './bill';
import samples from './bill.samples';
import data from './bill.defaults';

const { defaults, required } = data;

const amortization = {
  first: {
    principle: '87.75',
    interest: '5.83',
    start: '1000.00',
    end: '912.25',
    month: 1,
  },
  last: {
    principle: '93.54',
    interest: '0.04',
    start: '6.14',
    end: '-87.41',
    month: 12,
  },
};

describe('Class Bill', () => {
  test('is defined', () => {
    expect(Bill).toBeDefined();
  });

  test('creates an object', () => {
    const newBill = new Bill();
    expect(typeof newBill).toEqual('object');
    expect(Bill).toEqual(Bill.prototype.constructor);
    /* Accessible Functions */
    expect(typeof newBill.set).toEqual('function');
    /* Accessible Props */
    expect(newBill.name).toEqual(defaults.name);
    expect(newBill.balance).toEqual(defaults.balance);
    expect(newBill.type).toEqual(defaults.type);
    expect(newBill.apr).toEqual(defaults.apr);
    expect(newBill.payment).toEqual(defaults.payment);
    expect(newBill.periods).toEqual(defaults.periods);
    expect(newBill.interestRate).toEqual(defaults.interestRate);
  });

  test(`new Bill.get(attribute) returns given attrbiute`, () => {
    const newBill = new Bill(samples[0]);
    expect(newBill.name).toEqual(samples[0].name);
    expect(newBill.balance).toEqual(samples[0].balance);
    expect(newBill.apr).toEqual(samples[0].apr / 100);
    expect(newBill.periods).toEqual(samples[0].periods);
    expect(newBill.type).toEqual(samples[0].type);
    expect(newBill.payment).toEqual(samples[0].payment);
  });

  test(`new Bill.set('type', type) returns given type`, () => {
    const newBill = new Bill();
    expect(newBill.set('type', samples[0].type)).toEqual(samples[0].type);
    expect(newBill.type).toEqual(samples[0].type);
  });

  test(`new Bill.set('balance', balance) returns given balance`, () => {
    const newBill = new Bill();
    expect(newBill.set('balance', samples[0].balance)).toEqual(samples[0].balance);
    expect(newBill.balance).toEqual(samples[0].balance);
  });

  test(`new Bill.apr returns given apr`, () => {
    const newBill = new Bill();
    expect(newBill.set('apr', samples[0].apr)).toEqual(samples[0].apr / 100);
    expect(newBill.apr).toEqual(samples[0].apr / 100);
  });

  test(`new Bill.set('payment returns given payment`, () => {
    const newBill = new Bill();
    expect(newBill.set('payment', samples[0].payment)).toEqual(samples[0].payment);
    expect(newBill.payment).toEqual(samples[0].payment);
  });

  test(`new Bill.periods returns given periods`, () => {
    const newBill = new Bill();
    expect(newBill.set('periods', samples[0].periods)).toEqual(samples[0].periods);
    expect(newBill.periods).toEqual(samples[0].periods);
  });

  test(`new Bill.futureValue returns given futureValue`, () => {
    const newBill = new Bill();
    expect(newBill.set('futureValue', samples[0].futureValue)).toEqual(samples[0].futureValue);
    expect(newBill.futureValue).toEqual(samples[0].futureValue);
  });

  test(`setting new balance changes periods`, () => {
    const newBill = new Bill(samples[0]);
    expect(newBill.set('balance', samples[1].balance)).toEqual(samples[1].balance);
    expect(newBill.payment).toEqual(samples[1].payment);
    expect(newBill.periods).toEqual(samples[1].periods);
  });

  test(`setting new balance and payment calculates periods`, () => {
    const newBill = new Bill(samples[0]);
    expect(newBill.set('balance', samples[1].balance)).toEqual(samples[1].balance);
    expect(newBill.set('payment', samples[1].payment)).toEqual(samples[1].payment);
    expect(newBill.periods).toEqual(samples[1].periods);
  });

  test(`estimated number of payments is calculated correctly`, () => {
    const newBill = new Bill(samples[0]);
    const payments = newBill.estimateNumberOfPayments();
    const numberOfPayments = payments.amortization.length - 1;
    expect(payments.amortization[0].start).toEqual(amortization.first.start);
    expect(payments.amortization[0].end).toEqual(amortization.first.end);
    expect(payments.amortization[0].principle).toEqual(amortization.first.principle);
    expect(payments.amortization[0].interest).toEqual(amortization.first.interest);
    expect(payments.amortization[0].month).toEqual(amortization.first.month);
    expect(payments.amortization[numberOfPayments].start).toEqual(amortization.last.start);
    expect(payments.amortization[numberOfPayments].end).toEqual(amortization.last.end);
    expect(payments.amortization[numberOfPayments].principle).toEqual(amortization.last.principle);
    expect(payments.amortization[numberOfPayments].interest).toEqual(amortization.last.interest);
    expect(payments.amortization[numberOfPayments].month).toEqual(amortization.last.month);
  });

  test(`adding balance and period calculates payments`, () => {
    const newBill = new Bill();
    expect(newBill.set('balance', samples[0].balance)).toEqual(samples[0].balance);
    expect(newBill.set('periods', samples[1].periods)).toEqual(samples[1].periods);
    expect(newBill.payment).toEqual(samples[2].payment);
    expect(newBill.set('periods', samples[2].periods)).toEqual(samples[2].periods);
    expect(newBill.payment).toEqual(samples[3].payment);
    expect(newBill.set('apr', samples[4].apr)).toEqual(samples[4].apr / 100);
    expect(newBill.periods).toEqual(samples[4].periods);
    expect(newBill.payment).toEqual(samples[4].payment);
  });

  test(`paying exact amount of balance with interest will require 1 payment`, () => {
    const newBill = new Bill(samples[5]);
    expect(newBill.periods).toEqual(samples[5].periods);
    expect(newBill.set('balance', samples[6].balance)).toEqual(samples[6].balance);
    expect(newBill.set('payment', samples[6].payment)).toEqual(samples[6].payment);
    expect(newBill.periods).toEqual(samples[6].periods);
  });

  test(`credit card with type 1 payment`, () => {
    const newBill = new Bill(samples[7]);
    expect(newBill.set('periods', 12)).toEqual(12);
  });
});
