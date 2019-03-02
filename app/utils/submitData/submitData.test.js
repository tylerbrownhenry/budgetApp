import submitData from './submitData';
import i18next from '../i18next/i18next';

describe('submitData', () => {
  test('submitData is defined', () => {
    expect(submitData).toBeDefined();
  });

  test('called with not arguments returns an error', () => {
    const validateResponse = submitData.submit();
    expect(validateResponse).toHaveProperty('error');
  });

  test('called with invalid class throws an error', () => {
    const fakeClassName = 'thisClassDoesNotExist';
    const response = submitData.submit({
      class: fakeClassName,
      values: {},
    });
    const message = i18next.t('error.class.missing', { class: fakeClassName });
    expect(response).toHaveProperty('error');
    expect(response.error).toEqual(message);
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.class.missing') === -1).toBeTruthy();
  });

  test('called for a deposit with no account throws an error', () => {
    const validateResponse = submitData.submit({
      class: 'Deposit',
      values: {},
    });
    expect(validateResponse).toHaveProperty('error');
  });

  test('creates a new Deposit if have account set', () => {
    const newDeposit = submitData.submit({
      class: 'Deposit',
      values: {
        account: '123',
      },
    });
    expect(newDeposit).toHaveProperty('set');
    expect(newDeposit.account).toEqual('123');
  });
})
