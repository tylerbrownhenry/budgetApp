import Deposit from './deposit';
import samples from './deposit.samples';
import data from './deposit.defaults';
const {defaults, required} = data;

describe('Deposit Account', () => {

    test('is defined', () => {
        expect(Deposit).toBeDefined();
    });

    test('throws error with no account', () => {
        try{
            let newDeposit = new Deposit();
        } catch(e){
            expect(e.error).toBeDefined();
        }
    });
    
    test('creates an object', () => {
        let newDeposit = new Deposit(samples[1]);
        expect(typeof newDeposit).toEqual('object');
        expect(Deposit).toEqual(Deposit.prototype.constructor); 
        /* Accessible Functions */
        expect(newDeposit.set).toBeDefined();
        /* Accessible Props */
        expect(newDeposit.name).toEqual(defaults.name);
        expect(newDeposit.amount).toEqual(defaults.amount);
        expect(newDeposit.type).toEqual(defaults.type);
        expect(newDeposit.schedule).toEqual(defaults.schedule);
        expect(newDeposit.account).toEqual(samples[1].account);
    });

    test(`.set('name') returns given name`, () => {
        let newDeposit = new Deposit(samples[1]);
        expect(newDeposit.set('name',samples[0].name)).toEqual(samples[0].name);
        expect(newDeposit.name).toEqual(samples[0].name);
    });

    test(`.set('amount') returns given amount`, () => {
        let newDeposit = new Deposit(samples[1]);
        expect(newDeposit.set('amount',samples[0].amount)).toEqual(samples[0].amount);
        expect(newDeposit.amount).toEqual(samples[0].amount);
    });

    test(`.set('type') returns given type`, () => {
        let newDeposit = new Deposit(samples[1]);
        expect(newDeposit.set('type',samples[0].type)).toEqual(samples[0].type);
        expect(newDeposit.type).toEqual(samples[0].type);
    });

    test(`.set('schedule') returns given schedule`, () => {
        let newDeposit = new Deposit(samples[1]);
        expect(newDeposit.set('schedule',samples[0].schedule)).toEqual(samples[0].schedule);
        expect(newDeposit.schedule).toEqual(samples[0].schedule);
    });

    test(`.set('account') returns given account`, () => {
        let newDeposit = new Deposit(samples[1]);
        expect(newDeposit.set('account',samples[0].account)).toEqual(samples[0].account);
        expect(newDeposit.account).toEqual(samples[0].account);
    });

    test(`.set('account') throws error if removing an account`, () => {
        let newDeposit = new Deposit(samples[1]);
        expect(newDeposit.set('account',samples[0].account)).toEqual(samples[0].account);
        expect(newDeposit.account).toEqual(samples[0].account);
    });

});