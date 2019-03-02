import dashboardHandler from './dashboardHandler';
import i18next from 'i18next';

test('dashboardHandler is defined', () => {
    expect(dashboardHandler).toBeDefined();
    expect(typeof dashboardHandler).toEqual('object');
    expect(dashboardHandler.init).toBeDefined();
    expect(typeof dashboardHandler.init).toEqual('function');
});

test('dashboardHandler.init() returns a dashboard object', () => {
    expect.hasAssertions();
    return dashboardHandler.init().then((e)=>{
        expect(e.get('unsavedChanges')).toEqual(true);
        return expect(e).toHaveProperty('get');
    })
});

test('dashboardHandler.init({id:123}) returns a dashboard object', () => {
    expect.hasAssertions();
    return dashboardHandler.init({id:123}).then((e)=>{
        console.log('e',e.get('state'));
        return expect(e.get('unsavedChanges')).toEqual(true);
    });
});

test('dashboardHandler.findCurrentState() returns default if set', () => {
    expect.hasAssertions();
    return expect(dashboardHandler.findCurrentState({defaultState:'thisDefault'})).toEqual('thisDefault');
});

test('dashboardHandler.initDashboard() returns a dashboard with a default state', () => {
    expect.hasAssertions();
    return dashboardHandler.initDashboard({},{state:[]},(response)=>{
        console.log('---',response.get('states'));
        return expect(response.get('states').length === 1).toEqual(true);
    });
});

test('dashboardHandler.initDashboard() returns a dashboard with given state', () => {
    expect.hasAssertions();
    return dashboardHandler.initDashboard({},{state:[{id:111}]},(response)=>{
        console.log('---',response.get('states'));
        return expect(response.get('states')[0].id).toEqual(111);
    });
});

// test('dashboardHandler.init({})', () => {
//     expect.hasAssertions();
//     return dashboardHandler.init({id:123}).then((e)=>{
//         return expect(e).toHaveProperty('get');
//     });
// });

// test('dashboardHandler.init(id) calls then', () => {
//     return expect(dashboardHandler.init(123)).resolves.toHaveProperty('info')
// });