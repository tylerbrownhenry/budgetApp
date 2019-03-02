import dashboardHandler from './dashboardHandler';
import i18next from 'i18next';

test('dashboardHandler is defined', () => {
    expect(dashboardHandler).toBeDefined();
    expect(typeof dashboardHandler).toEqual('object');
    expect(dashboardHandler.init).toBeDefined();
    expect(typeof dashboardHandler.init).toEqual('function');
    // dashboardHandler.init({id:123, unsavedChanges: true});
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

// test('dashboardHandler.init({})', () => {
//     expect.hasAssertions();
//     return dashboardHandler.init({id:123}).then((e)=>{
//         return expect(e).toHaveProperty('get');
//     });
// });

// test('dashboardHandler.init(id) calls then', () => {
//     return expect(dashboardHandler.init(123)).resolves.toHaveProperty('info')
// });