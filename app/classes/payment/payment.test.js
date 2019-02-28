import Payment from './payment';
import data from './payment.samples';
const {defaults, samples} = data;

test('Payment is defined', () => {
    expect(Payment).toBeDefined();
});

test('new Payment creates an object', () => {
    let newPayment = new Payment();
    expect(typeof newPayment).toEqual('object');
    expect(Payment).toEqual(Payment.prototype.constructor);
    /* Private Props */
    expect(newPayment.name).toBeUndefined();
    /* Accessible Functions */
    expect(typeof newPayment.get).toEqual('function');
    expect(typeof newPayment.set).toEqual('function');
    /* Accessible Props */
    expect(newPayment.get('name')).toEqual(defaults.name);
});

test(`new Payment.set('name') returns given name`, () => {
    let newPayment = new Payment();
    expect(newPayment.set('name',samples[0].name)).toEqual(samples[0].name);
    expect(newPayment.get('name')).toEqual(samples[0].name);
});