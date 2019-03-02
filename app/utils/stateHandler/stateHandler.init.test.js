import i18next from 'i18next';
import stateHandler from './stateHandler';
import getData from '../getData/getData';
import state from '../../classes/state/state.samples';


describe('stateHandler calling errors', () => {
  test('stateHandler is defined', () => {
    expect(stateHandler).toBeDefined();
    expect(typeof stateHandler).toEqual('object');
  });

  test('stateHandler.init(false) calls catch', () => {
    expect(stateHandler.init).toBeDefined();
    expect(typeof stateHandler.init).toEqual('function');
    return expect(stateHandler.init()).rejects.toHaveProperty('error');
  });

  test('stateHandler.init(id) calls then', () => {
    const id = 123;
    return expect(stateHandler.init(id)).resolves.toHaveProperty('info');
  });
})
