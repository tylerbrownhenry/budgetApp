import stateHandler from './stateHandler';
import i18next from 'i18next';
jest.mock('../getData/getData');
import getData from '../getData/getData'; 
import state from '../../classes/state/state.samples';

describe('stateHandler',()=>{
    beforeEach(() => {
        getData.loadStates.mockReturnValue(Promise.resolve({results:state}));
    });
    
    test('stateHandler.init(id) with mocked data will return a default state', () => {
        expect.assertions(1);
        return stateHandler.init({id:123}).then((response)=>{
            return expect(response.state[1].id).toEqual(response.defaultState);
        });
    });

    afterEach(() => {
        jest.unmock('../getData/getData');
    });
});