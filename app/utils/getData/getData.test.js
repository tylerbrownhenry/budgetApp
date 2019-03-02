import i18next from 'i18next';
import getData from './getData';

describe('getData', () => {
  test('is defined', () => {
    expect(getData).toBeDefined();
    expect(typeof getData).toEqual('object');
  });

  test('.loadStates(false) calls catch', () => {
    expect(getData.loadStates).toBeDefined();
    expect(typeof getData.loadStates).toEqual('function');
    return expect(getData.loadStates()).rejects.toThrow(Error);
  });

  test('.loadStates(false) calls catch has error message', () => {
    expect.assertions(3);
    return getData.loadStates()
      .catch((error) => {
        const message = i18next.t('error.api.failed', {
          details: "Something happened...",
        });
        expect(message).toEqual(error.message);
        expect(message.length !== 0).toBeTruthy();
        expect(message.indexOf('error.api.failed') === -1).toBeTruthy();
      });
  });

  test('.loadStates(id) calls then', () => {
    const id = 123;
    expect.assertions(1);
    getData.loadStates(id).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
