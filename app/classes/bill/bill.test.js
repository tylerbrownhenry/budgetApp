const Bill = require('./bill');

const testBillName = 'New Bill Name';
const defaultBillName = 'Unnamed Bill';

const defaultBillType = 0
const testBillType = 1;

const defaultBillBalance = 0;
const testNewBalance = 1000;

const defaultBillAPR = 0;
const testNewAPR = 7;

const testNewPayment = 100;
const defaultBillPayment = 0;

const testNewPeriods = 12;
const defaultPeriods = 0;

const testNewFutureValue = 1000;
const defaultFutureValue = 0;

const defaultBillInterestRate = 0;
const calculatedInterestRate = 0.005833333333333334;

const projectedPayment = 44.77;
const estimatedNumberOfPayments = 11;

const estimatedPayments = {
    first:{ 
        principle: '94.17',
        interest: '5.83',
        start: '1000.00',
        end: '905.83',
        month: 1 
    },
    last:{ 
        principle: '99.81',
        interest: '0.19',
        start: '33.23',
        end: '-66.58',
        month: 11
    }
};

test('Bill is defined', () => {
  expect(Bill).toBeDefined();
});

test('new Bill creates an object', () => {
    let newBank = new Bill(testBillName);
    expect(typeof newBank).toEqual('object');
    expect(Bill).toEqual(Bill.prototype.constructor);
    /* Private Props */
    expect(newBank.name).toBeUndefined();
    expect(newBank.balance).toBeUndefined();
    expect(newBank.type).toBeUndefined();
    expect(newBank.apr).toBeUndefined();
    expect(newBank.payment).toBeUndefined();
    expect(newBank.periods).toBeUndefined();
    expect(newBank.interestRate).toBeUndefined();
});

test(`new Bill.get('name') returns given name`, () => {
    let newBill = new Bill(testBillName);
    expect(typeof newBill.get).toEqual('function');
    expect(newBill.get('name')).toEqual(testBillName);
});

test(`new Bill.get('name') returns default name`, () => {
    let newBill = new Bill(undefined);
    expect(newBill.get('name')).toEqual(defaultBillName);
});

test(`new Bill.get('type') returns given type`, () => {
    let newBill = new Bill(undefined, testBillType);
    expect(newBill.get('type')).toEqual(testBillType);
});

test(`new Bill.get('type') returns default type`, () => {
    let newBill = new Bill(undefined,undefined);
    expect(newBill.get('type')).toEqual(defaultBillType);
});

test(`new Bill.set('type') returns given type`, () => {
    let newBill = new Bill(undefined, undefined, undefined);
    expect(newBill.get('type')).toEqual(defaultBillType);
    expect(newBill.set('type',testBillType)).toEqual(testBillType);
    expect(newBill.get('type')).toEqual(testBillType);
});

test(`new Bill.get('balance') returns given balance`, () => {
    let newBill = new Bill(undefined, undefined, testNewBalance);
    expect(newBill.get('balance')).toEqual(testNewBalance);
});

test(`new Bill.set('balance') returns given balance`, () => {
    let newBill = new Bill(undefined, undefined, undefined);
    expect(newBill.get('balance')).toEqual(defaultBillBalance);
    expect(newBill.set('balance',testNewBalance)).toEqual(testNewBalance);
    expect(newBill.get('balance')).toEqual(testNewBalance);
});

test(`new Bill.get('balance') returns default balance`, () => {
    let newBill = new Bill(undefined);
    expect(newBill.get('balance')).toEqual(defaultBillBalance);
});

test(`new Bill.get('apr') returns given apr`, () => {
    let newBill = new Bill(undefined, undefined, undefined, testNewAPR);
    expect(newBill.get('apr')).toEqual(testNewAPR / 100);
});

test(`new Bill.set('apr') returns given apr`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined);
    expect(newBill.get('apr')).toEqual(defaultBillAPR);
    expect(newBill.set('apr',testNewAPR)).toEqual(testNewAPR / 100);
    expect(newBill.get('apr')).toEqual(testNewAPR / 100);
});

test(`new Bill.get('apr') returns default apr`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined);
    expect(newBill.get('apr')).toEqual(defaultBillAPR);
});

test(`new Bill.get('payment') returns given payment`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, testNewPayment);
    expect(newBill.get('payment')).toEqual(testNewPayment);
});

test(`new Bill.set('payment') returns given payment`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, undefined);
    expect(newBill.get('payment')).toEqual(defaultBillPayment);
    expect(newBill.set('payment',testNewPayment)).toEqual(testNewPayment);
    expect(newBill.get('payment')).toEqual(testNewPayment);
});

test(`new Bill.get('payment') returns default payment`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, undefined);
    expect(newBill.get('payment')).toEqual(defaultBillPayment);
});

test(`new Bill.get('periods') returns given periods`, () => {
    let newBill = new Bill(undefined, undefined, 1200, undefined, 100, testNewPeriods);
    expect(newBill.get('periods')).toEqual(testNewPeriods);
});

test(`setting new balance changes periods`, () => {
    let newBill = new Bill(undefined, undefined, 1200, undefined, 100, undefined);
    expect(newBill.get('periods')).toEqual(12);
    expect(newBill.set('balance',1400)).toEqual(1400);
    expect(newBill.get('periods')).toEqual(14);
});

test(`new Bill.get('periods') returns default periods`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, undefined, undefined);
    expect(newBill.get('periods')).toEqual(defaultPeriods);
});

test(`new Bill.get('futureValue') returns given futureValue`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, undefined, undefined, testNewFutureValue);
    expect(newBill.get('futureValue')).toEqual(testNewFutureValue);
});

test(`new Bill.set('futureValue') returns given futureValue`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    expect(newBill.get('futureValue')).toEqual(defaultFutureValue);
    expect(newBill.set('futureValue',testNewFutureValue)).toEqual(testNewFutureValue);
    expect(newBill.get('futureValue')).toEqual(testNewFutureValue);
});

test(`new Bill.get('futureValue') returns default futureValue`, () => {
    let newBill = new Bill(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    expect(newBill.get('futureValue')).toEqual(defaultFutureValue);
});

test(`new Bill.get('interestRate') returns default interestRate`, () => {
    let newBill = new Bill();
    expect(newBill.get('interestRate')).toEqual(defaultBillInterestRate);
});
test(`new Bill. with no balance or payment will have `, () => {
    let newBill = new Bill();
    expect(newBill.get('periods')).toEqual(0);
});

test(`estimated number of payments is calculated correctly`, () => {
    let newBill = new Bill(testBillName, 0, testNewBalance, testNewAPR, testNewPayment, testNewPeriods);
    let payments = newBill.estimateNumberOfPayments();
    let amortization = payments.amortization;
    expect(payments.payments).toEqual(estimatedNumberOfPayments);
    expect(amortization[0].start).toEqual(estimatedPayments.first.start);
    expect(amortization[0].end).toEqual(estimatedPayments.first.end);
    expect(amortization[0].principle).toEqual(estimatedPayments.first.principle);
    expect(amortization[0].interest).toEqual(estimatedPayments.first.interest);
    expect(amortization[0].month).toEqual(estimatedPayments.first.month);
    expect(amortization[estimatedNumberOfPayments - 1].start).toEqual(estimatedPayments.last.start);
    expect(amortization[estimatedNumberOfPayments - 1].end).toEqual(estimatedPayments.last.end);
    expect(amortization[estimatedNumberOfPayments - 1].principle).toEqual(estimatedPayments.last.principle);
    expect(amortization[estimatedNumberOfPayments - 1].interest).toEqual(estimatedPayments.last.interest);
    expect(amortization[estimatedNumberOfPayments - 1].month).toEqual(estimatedPayments.last.month);
});


