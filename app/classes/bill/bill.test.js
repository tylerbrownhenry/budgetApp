import Bill from './bill';
import data from './bill.samples';

const {defaults, samples, amortization} = data;

test('Bill is defined', () => {
  expect(Bill).toBeDefined();
});

test('new Bill creates an object', () => {
    let newBill = new Bill();
    expect(typeof newBill).toEqual('object');
    expect(Bill).toEqual(Bill.prototype.constructor);
    /* Private Props */
    expect(newBill.name).toBeUndefined();
    expect(newBill.balance).toBeUndefined();
    expect(newBill.type).toBeUndefined();
    expect(newBill.apr).toBeUndefined();
    expect(newBill.payment).toBeUndefined();
    expect(newBill.periods).toBeUndefined();
    expect(newBill.interestRate).toBeUndefined();
    /* Accessible Functions */
    expect(typeof newBill.get).toEqual('function');
    expect(typeof newBill.set).toEqual('function');
    /* Accessible Props */
    expect(newBill.get('name')).toEqual(defaults.name);
    expect(newBill.get('balance')).toEqual(defaults.balance);
    expect(newBill.get('type')).toEqual(defaults.type);
    expect(newBill.get('apr')).toEqual(defaults.apr);
    expect(newBill.get('payment')).toEqual(defaults.payment);
    expect(newBill.get('periods')).toEqual(defaults.periods);
    expect(newBill.get('interestRate')).toEqual(defaults.interestRate);
});

test(`new Bill.get(attribute) returns given attrbiute`, () => {
    let newBill = new Bill(samples[0]);
    expect(newBill.get('name')).toEqual(samples[0].name);
    expect(newBill.get('balance')).toEqual(samples[0].balance);
    expect(newBill.get('apr')).toEqual(samples[0].apr / 100);
    expect(newBill.get('periods')).toEqual(samples[0].periods);
    expect(newBill.get('type')).toEqual(samples[0].type);
    expect(newBill.get('payment')).toEqual(samples[0].payment);
});

test(`new Bill.set('type') returns given type`, () => {
    let newBill = new Bill();
    expect(newBill.set('type',samples[0].type)).toEqual(samples[0].type);
    expect(newBill.get('type')).toEqual(samples[0].type);
});

test(`new Bill.set('balance') returns given balance`, () => {
    let newBill = new Bill();
    expect(newBill.set('balance',samples[0].balance)).toEqual(samples[0].balance);
    expect(newBill.get('balance')).toEqual(samples[0].balance);
});

test(`new Bill.get('apr') returns given apr`, () => {
    let newBill = new Bill();
    expect(newBill.set('apr',samples[0].apr)).toEqual(samples[0].apr / 100);
    expect(newBill.get('apr')).toEqual(samples[0].apr / 100);
});

test(`new Bill.set('payment') returns given payment`, () => {
    let newBill = new Bill();
    expect(newBill.set('payment',samples[0].payment)).toEqual(samples[0].payment);
    expect(newBill.get('payment')).toEqual(samples[0].payment);
});

test(`new Bill.get('periods') returns given periods`, () => {
    let newBill = new Bill();
    expect(newBill.set('periods',samples[0].periods)).toEqual(samples[0].periods);
    expect(newBill.get('periods')).toEqual(samples[0].periods);
});

test(`new Bill.get('futureValue') returns given futureValue`, () => {
    let newBill = new Bill();
    expect(newBill.set('futureValue',samples[0].futureValue)).toEqual(samples[0].futureValue);
    expect(newBill.get('futureValue')).toEqual(samples[0].futureValue);
});

test(`setting new balance changes periods`, () => {
    let newBill = new Bill(samples[0]);
    expect(newBill.set('balance',samples[1].balance)).toEqual(samples[1].balance);
    expect(newBill.get('payment')).toEqual(samples[1].payment);
    expect(newBill.get('periods')).toEqual(samples[1].periods);
});

test(`setting new balance and payment calculates periods`, () => {
        let newBill = new Bill(samples[0]);
        expect(newBill.set('balance',samples[1].balance)).toEqual(samples[1].balance);
        expect(newBill.set('payment',samples[1].payment)).toEqual(samples[1].payment);
        expect(newBill.get('periods')).toEqual(samples[1].periods);
});

test(`estimated number of payments is calculated correctly`, () => {
    let newBill = new Bill(samples[0]);
    let payments = newBill.estimateNumberOfPayments();
    let numberOfPayments = payments.amortization.length - 1;
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

test(`new Bill adding balance and period calculates payments`, () => {
    let newBill = new Bill();
    expect(newBill.set('balance',samples[0].balance)).toEqual(samples[0].balance);
    expect(newBill.set('periods',samples[1].periods)).toEqual(samples[1].periods);
    expect(newBill.get('payment')).toEqual(samples[2].payment);
    expect(newBill.set('periods',samples[2].periods)).toEqual(samples[2].periods);
    expect(newBill.get('payment')).toEqual(samples[3].payment);
    expect(newBill.set('apr',samples[4].apr)).toEqual(samples[4].apr / 100);
    expect(newBill.get('periods')).toEqual(samples[4].periods);
    expect(newBill.get('payment')).toEqual(samples[4].payment);
});

test(`paying exact amount of balance with interest will require 1 payment`, () => {
    let newBill = new Bill(samples[5]);
    expect(newBill.get('periods')).toEqual(samples[5].periods);
    expect(newBill.set('balance',samples[6].balance)).toEqual(samples[6].balance);
    expect(newBill.set('payment',samples[6].payment)).toEqual(samples[6].payment);
    expect(newBill.get('periods')).toEqual(samples[6].periods);
});

test(`credit card with type 1 payment`, () => {
    let newBill = new Bill(samples[7]);
    expect(newBill.set('periods', 12)).toEqual(12);
});





