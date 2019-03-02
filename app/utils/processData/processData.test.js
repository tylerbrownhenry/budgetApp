import i18next from 'i18next';
import processData from './processData';
import classes from '../../classes/classes';

const { State, Deposit } = classes;

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
  }));

  test('.convert() calls then with state objects', () => processData.convert([{}], State, 'state', 'state', (response) => {
    expect(response.state.info).toBeUndefined();
    expect(typeof response.state[0]).toEqual('object');
  }));

  test('.convert() calls catch when creating deposit with no account provided', () => processData.convert([{}], Deposit, 'deposit', 'deposit', (response) => {
    expect(response).toHaveProperty('error');
  }));
});
