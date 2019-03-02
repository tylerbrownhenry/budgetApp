import getData from './getData';
import i18next from 'i18next';

test('getData is defined', () => {
    expect(getData).toBeDefined();
    expect(typeof getData).toEqual('object');
});

test('getData.loadStates(false) calls catch', () => {
    expect(getData.loadStates).toBeDefined();
    expect(typeof getData.loadStates).toEqual('function');
    return expect(getData.loadStates()).rejects.toHaveProperty('error');
});

test('getData.loadStates(id) calls then', () => {
    let id = 123;
    expect.assertions(1);
    getData.loadStates(id).then((response)=>{
        expect(response).toBeDefined();
    });
});



