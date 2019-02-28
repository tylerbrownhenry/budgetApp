import Deposit from './deposit';
import data from './deposit.samples';
const {defaults, samples} = data;

test('Deposit is defined', () => {
    expect(Deposit).toBeDefined();
});

test('new Deposit throws error with no account', () => {
    try{
        let newDeposit = new Deposit();
    } catch(e){
        expect(e.error).toBeDefined();
        expect(e.required).toBeDefined();
    }
});
  
test('new Deposit creates an object', () => {
    let newDeposit = new Deposit(samples[1]);
    expect(typeof newDeposit).toEqual('object');
    expect(Deposit).toEqual(Deposit.prototype.constructor);
    /* Private Props */
    expect(newDeposit.name).toBeUndefined();
    expect(newDeposit.amount).toBeUndefined();
    expect(newDeposit.type).toBeUndefined();
    expect(newDeposit.schedule).toBeUndefined();
    expect(newDeposit.account).toBeUndefined();
    /* Accessible Functions */
    expect(newDeposit.get).toBeDefined();
    expect(newDeposit.set).toBeDefined();
    /* Accessible Props */
    expect(newDeposit.get('name')).toEqual(defaults.name);
    expect(newDeposit.get('amount')).toEqual(defaults.amount);
    expect(newDeposit.get('type')).toEqual(defaults.type);
    expect(newDeposit.get('schedule')).toEqual(defaults.schedule);
    expect(newDeposit.get('account')).toEqual(samples[1].account);
});

test(`new Deposit.set('name') returns given name`, () => {
    let newDeposit = new Deposit(samples[1]);
    expect(newDeposit.set('name',samples[0].name)).toEqual(samples[0].name);
    expect(newDeposit.get('name')).toEqual(samples[0].name);
});

test(`new Deposit.set('amount') returns given amount`, () => {
    let newDeposit = new Deposit(samples[1]);
    expect(newDeposit.set('amount',samples[0].amount)).toEqual(samples[0].amount);
    expect(newDeposit.get('amount')).toEqual(samples[0].amount);
});

test(`new Deposit.set('type') returns given type`, () => {
    let newDeposit = new Deposit(samples[1]);
    expect(newDeposit.set('type',samples[0].type)).toEqual(samples[0].type);
    expect(newDeposit.get('type')).toEqual(samples[0].type);
});

test(`new Deposit.set('schedule') returns given schedule`, () => {
    let newDeposit = new Deposit(samples[1]);
    expect(newDeposit.set('schedule',samples[0].schedule)).toEqual(samples[0].schedule);
    expect(newDeposit.get('schedule')).toEqual(samples[0].schedule);
});

test(`new Deposit.set('account') returns given account`, () => {
    let newDeposit = new Deposit(samples[1]);
    expect(newDeposit.set('account',samples[0].account)).toEqual(samples[0].account);
    expect(newDeposit.get('account')).toEqual(samples[0].account);
});

test(`new Deposit.set('account') throws error if removing an account`, () => {
    let newDeposit = new Deposit(samples[1]);
    expect(newDeposit.set('account',samples[0].account)).toEqual(samples[0].account);
    expect(newDeposit.get('account')).toEqual(samples[0].account);
});