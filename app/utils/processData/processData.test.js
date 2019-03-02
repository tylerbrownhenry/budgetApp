import processData from './processData';
import i18next from 'i18next';
import classes from '../../classes/classes';
const {State, Deposit} = classes;

describe('processData',() => {
    
    test('is defined', () => {
        expect(processData).toBeDefined();
        expect(typeof processData).toEqual('object');
    });

    test('.convert() calls then with message', () => {
        return processData.convert(undefined, State, 'state', 'state', (response)=>{
            expect(response).toHaveProperty('info');
        });
    });

    test('.convert([]) calls then with message', () => {
        return processData.convert([], State, 'state', 'state', (response)=>{
            expect(response).toHaveProperty('info');
        });
    });

    test('.convert() calls then with state objects', () => {
        return processData.convert([{}], State, 'state', 'state', (response)=>{
            expect(response.state.info).toBeUndefined();
            expect(typeof response.state[0]).toEqual('object');
        });
    });

    test('.convert() calls catch when creating deposit with no account provided', () => {
        return processData.convert([{}], Deposit, 'deposit', 'deposit', (response)=>{
            expect(response).toHaveProperty('error');
        });
    });
});