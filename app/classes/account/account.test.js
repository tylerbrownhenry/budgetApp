import Account from './account';
import samples from './account.samples';
import data from './account.defaults';
const {defaults, required} = data;

describe('Class Account', () => {

    test('is defined', () => {
        expect(Account).toBeDefined();
    });

    test('creates an object', () => {
        let newAccount = new Account();
        expect(typeof newAccount).toEqual('object');
        expect(Account).toEqual(Account.prototype.constructor);
        /* Accessible Functions */
        expect(typeof newAccount.set).toEqual('function');
        /* Accessible Props */
        expect(newAccount.name).toEqual(defaults.name);
        expect(newAccount.balance).toEqual(defaults.balance);
        expect(newAccount.type).toEqual(defaults.type);
        expect(newAccount.apr).toEqual(defaults.apr);
    });

    test(`.get(attribute) returns given attributes`, () => {
        let newAccount = new Account(samples[0]);
        expect(newAccount.name).toEqual(samples[0].name);
        expect(newAccount.type).toEqual(samples[0].type);
        expect(newAccount.apr).toEqual(samples[0].apr);
        expect(newAccount.balance).toEqual(samples[0].balance);
    });

    test(`.set('type') sets type to given newValue`, () => {
        let newAccount = new Account(samples[0]);
        expect(newAccount.type).toEqual(samples[0].type);
        expect(newAccount.set('type', samples[1].type)).toEqual(samples[1].type);
        expect(newAccount.type).toEqual(samples[1].type);
    });

    test(`.set('balance') sets balance to given newValue`, () => {
        let newAccount = new Account();
        expect(newAccount.balance).toEqual(defaults.balance);
        expect(newAccount.set('balance', samples[1].balance)).toEqual(samples[1].balance);
        expect(newAccount.balance).toEqual(samples[1].balance);
    });

    test(` with default 'apr' then changed has apr with newValue`, () => {
        let newAccount = new Account();
        expect(newAccount.apr).toEqual(defaults.apr);
        expect(newAccount.set('apr', samples[0].apr)).toEqual(samples[0].apr);
        expect(newAccount.apr).toEqual(samples[0].apr);
    });

    test(`with default 'name' then changed has name with newValue`, () => {
        let newAccount = new Account();
        expect(newAccount.name).toEqual(defaults.name);
        expect(newAccount.set('name', samples[0].name)).toEqual(samples[0].name);
        expect(newAccount.name).toEqual(samples[0].name);
    });

});
