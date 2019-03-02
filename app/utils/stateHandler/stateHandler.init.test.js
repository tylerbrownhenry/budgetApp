import i18next from 'i18next';
import stateHandler from './stateHandler';
import getData from '../getData/getData';
import state from '../../classes/state/state.samples';

describe('stateHandler', () => {
  test('is defined', () => {
    expect(stateHandler).toBeDefined();
    expect(typeof stateHandler).toEqual('object');
    expect(stateHandler.init).toBeDefined();
    expect(typeof stateHandler.init).toEqual('function');
  });

  test('.init(false) calls catch', () => {
    expect.hasAssertions();
    return stateHandler.init().catch((response) => {
      const message = new Error(i18next.t('error.api.failed', { details: "Something happened..." }));
      expect(response).toEqual(message);
      expect(response.length !== 0).toBeTruthy();
      expect(response.message.indexOf('error.api.failed') === -1).toBeTruthy();
    });
  });

  test('.init(id) calls then', () => {
    const id = 123;
    return expect(stateHandler.init(id)).resolves.toHaveProperty('info');
  });
})
