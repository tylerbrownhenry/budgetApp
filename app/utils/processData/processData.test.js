import i18next from 'i18next';
import processData from './processData';
import classes from '../../classes/classes';

const {
  State,
  Deposit,
} = classes;

describe('processData', () => {
  test('is defined', () => {
    expect(processData).toBeDefined();
    expect(typeof processData).toEqual('object');
  });

  test('.convert() calls then with message', () => processData.convert(undefined, State, 'state', 'state', (response) => {
    expect(response).toHaveProperty('info');
  }));

  test('.convert([]) calls then with message', () => processData.convert([], State, 'state', 'state', (response) => {
    expect(response).toHaveProperty('info');
    const message = i18next.t('info.data.none.saved', {
      items: 'deposit',
    });
    expect(response).toHaveProperty('info');
    expect(response.info).toEqual(message);
    expect(response.info.length !== 0).toBeTruthy();
    expect(response.info.indexOf('info.data.none.saved') === -1).toBeTruthy();
  }));

  test('.convert() calls then with state objects', () => processData.convert([{}], State, 'state', 'state', (response) => {
    expect(response.state.info).toBeUndefined();
    expect(typeof response.state[0]).toEqual('object');
  }));

  test('.convert() calls catch when creating deposit with no account provided', () => processData.convert([{}], Deposit, 'deposit', 'deposit', (response) => {
    const functionName = `${i18next.t('parameter.class.name')}:Deposit`;
    const required = ['account'];
    const message = i18next.t('error.constructor.missingArguments', {
      functionName,
      required: required.join(','),
    });
    expect(response).toHaveProperty('error');
    expect(response.error).toEqual([{
      error: message,
      required,
    }]);
    expect(response.error.length !== 0).toBeTruthy();
    expect(response.error.indexOf('error.array.isNot') === -1).toBeTruthy();
  }));
});
