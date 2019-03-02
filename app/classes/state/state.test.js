import State from './state';
import samples from './state.samples';
import data from './state.defaults';
import i18next from '../../utils/i18next/i18next';

const {defaults, required} = data;

describe('Class State', () => {

    test('is defined', () => {
        expect(State).toBeDefined();
    });

    test('new State creates an object', () => {
        let newState = new State();
        expect(typeof newState).toEqual('object');
        expect(State).toEqual(State.prototype.constructor);
        /* Accessible Functions */
        expect(typeof newState.set).toEqual('function');
        /* Accessible Props */
        expect(newState.name).toEqual(defaults.name);
    });

    test('new State from sample has sample items', () => {
        let newState = new State(samples[1]);
        expect(newState.items).toEqual(samples[1].items);
    });

    test('trying to edit a property without using set method throws error', () => {
        let newState = new State(samples[1]);
        try{
            newState.items = 'nothing';
        }catch(e){
            expect(newState.items).toEqual(samples[1].items);
            expect(e).toEqual(i18next.t('error.constructor.useSet'));
        }
    });

});
