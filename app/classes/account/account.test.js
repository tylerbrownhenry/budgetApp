import Account from './account';
import data from './account.samples';
const {defaults, samples} = data;

test('Account is defined', () => {
  expect(Account).toBeDefined();
});

test('new Account creates an object', () => {
    let newAccount = new Account();
    expect(typeof newAccount).toEqual('object');
    expect(Account).toEqual(Account.prototype.constructor);
    /* Private Props */
    expect(newAccount.name).toBeUndefined();
    expect(newAccount.balance).toBeUndefined();
    expect(newAccount.type).toBeUndefined();
    expect(newAccount.apr).toBeUndefined(); 
    /* Public Functions */
    expect(typeof newAccount.get).toEqual('function');
    expect(typeof newAccount.set).toEqual('function');
    expect(typeof newAccount.monthlyInterest).toEqual('function');
    /* Accessible Props */
    expect(newAccount.get('name')).toEqual(defaults.name);
    expect(newAccount.get('balance')).toEqual(defaults.balance);
    expect(newAccount.get('type')).toEqual(defaults.type);
    expect(newAccount.get('apr')).toEqual(defaults.apr);
});

test(`new Account.get(attribute) returns given attributes`, () => {
    let newAccount = new Account(samples[0]);
    expect(newAccount.get('name')).toEqual(samples[0].name);
    expect(newAccount.get('type')).toEqual(samples[0].type);
    expect(newAccount.get('apr')).toEqual(samples[0].apr);
    expect(newAccount.get('balance')).toEqual(samples[0].balance);
});

test(`new Account.set('type') sets type to given newValue`, () => {
    let newAccount = new Account(samples[0]);
    expect(newAccount.get('type')).toEqual(samples[0].type);
    expect(newAccount.set('type', samples[1].type)).toEqual(samples[1].type);
    expect(newAccount.get('type')).toEqual(samples[1].type);
});

test(`new Account.set('balance') sets balance to given newValue`, () => {
    let newAccount = new Account();
    expect(newAccount.get('balance')).toEqual(defaults.balance);
    expect(newAccount.set('balance', samples[1].balance)).toEqual(samples[1].balance);
    expect(newAccount.get('balance')).toEqual(samples[1].balance);
});

test(`new Account with default 'apr' then changed has apr with newValue`, () => {
    let newAccount = new Account();
    expect(newAccount.get('apr')).toEqual(defaults.apr);
    expect(newAccount.set('apr', samples[0].apr)).toEqual(samples[0].apr);
    expect(newAccount.get('apr')).toEqual(samples[0].apr);
});

test(`new Account with default 'name' then changed has name with newValue`, () => {
    let newAccount = new Account();
    expect(newAccount.get('name')).toEqual(defaults.name);
    expect(newAccount.set('name', samples[0].name)).toEqual(samples[0].name);
    expect(newAccount.get('name')).toEqual(samples[0].name);
});
