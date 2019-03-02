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
    return expect(getData.loadStates()).rejects.toHaveProperty('error');
  });

  test('.loadStates(id) calls then', () => {
    const id = 123;
    expect.assertions(1);
    getData.loadStates(id).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
