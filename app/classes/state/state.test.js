import State from './state';
import samples from './state.samples';
import data from './state.defaults';
const {defaults, required} = data;

test('State is defined', () => {
    expect(State).toBeDefined();
});

test('State is defined', () => {
    expect(State).toBeDefined();
});

test('new State creates an object', () => {
    let newState = new State();
    expect(typeof newState).toEqual('object');
    expect(State).toEqual(State.prototype.constructor);
    /* Private Props */
    expect(newState.name).toBeUndefined();
    expect(newState.id).toBeUndefined();
    /* Accessible Functions */
    expect(typeof newState.get).toEqual('function');
    expect(typeof newState.set).toEqual('function');
    /* Accessible Props */
    expect(newState.get('name')).toEqual(defaults.name);
});

test('new State from sample has sample items', () => {
    let newState = new State(samples[1]);
    expect(newState.get('items')).toEqual(samples[1].items);
});
