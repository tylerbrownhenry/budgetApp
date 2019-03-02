import Payment from './payment';
import samples from './payment.samples';
import data from './payment.defaults';

const { defaults, required } = data;

describe('Class Payment', () => {
  test('is defined', () => {
    expect(Payment).toBeDefined();
  });

  test('returns an object', () => {
    const newPayment = new Payment();
    expect(typeof newPayment).toEqual('object');
    expect(Payment).toEqual(Payment.prototype.constructor);
    /* Accessible Functions */
    expect(typeof newPayment.set).toEqual('function');
    /* Accessible Props */
    expect(newPayment.name).toEqual(defaults.name);
  });

  test(`.set('name') returns given name`, () => {
    const newPayment = new Payment();
    expect(newPayment.set('name', samples[0].name)).toEqual(samples[0].name);
    expect(newPayment.name).toEqual(samples[0].name);
  });
});
