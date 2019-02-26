const Bank = require('./bank');
const testBankName = 'New Bank Name';
const testBankType = 'Not a bank';
const defaultBankType = 'bank'

const defaultBalance = 0;
const testNewBalance = 567;

test('Bank is defined', () => {
  expect(Bank).toBeDefined();
});

test('new Bank creates an object', () => {
    let newBank = new Bank(testBankName);
    expect(typeof newBank).toEqual('object');
    expect(Bank).toEqual(Bank.prototype.constructor);
    /* Private Props */
    expect(newBank.name).toBeUndefined();
    expect(newBank.balance).toBeUndefined();
    expect(newBank.type).toBeUndefined();
});

test(`new Bank.get('name') returns given name`, () => {
    let newBank = new Bank(testBankName);
    expect(typeof newBank.get).toEqual('function');
    expect(newBank.get('name')).toEqual(testBankName);
    console.log('NEWBAN',newBank);
});

test(`new Bank.get('type') returns default type`, () => {
    let newBank = new Bank(testBankName, undefined);
    expect(newBank.get('type')).toEqual(defaultBankType);
});

test(`new Bank.get('type') returns given type`, () => {
    let newBank = new Bank(testBankName, testBankType);
    expect(newBank.get('type')).toEqual(testBankType);
});

test(`new Bank.set('type') sets type to given newValue`, () => {
    let newBank = new Bank(testBankName);
    expect(newBank.get('type')).toEqual(defaultBankType);
    expect(newBank.set('type', testBankType)).toEqual(testBankType);
    expect(newBank.get('type')).toEqual(testBankType);
});

test(`new Bank.set('balance') sets balance to given newValue`, () => {
    let newBank = new Bank(testBankName, undefined);
    expect(newBank.get('balance')).toEqual(defaultBalance);
    expect(newBank.set('balance', testNewBalance)).toEqual(testNewBalance);
    expect(newBank.get('balance')).toEqual(testNewBalance);
});

test(`new Bank with 'balance' parameter passed sets balance to given newValue`, () => {
    let newBank = new Bank(testBankName, undefined, testNewBalance);
    expect(newBank.get('balance')).toEqual(testNewBalance);
});


