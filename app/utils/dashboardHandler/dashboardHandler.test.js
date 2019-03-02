import dashboardHandler from './dashboardHandler';
import i18next from 'i18next';

describe('dashboardHandler', () => {

    test('dashboardHandler is defined', () => {
        expect(dashboardHandler).toBeDefined();
        expect(typeof dashboardHandler).toEqual('object');
        expect(dashboardHandler.init).toBeDefined();
        expect(typeof dashboardHandler.init).toEqual('function');
    });

    test('.init() returns a dashboard object', () => {
        expect.hasAssertions();
        return dashboardHandler.init().then((e)=>{
            return expect(e.unsavedChanges).toEqual(true);
        })
    });

    test('.init({id:123}) returns a dashboard object', () => {
        expect.hasAssertions();
        return dashboardHandler.init({id:123}).then((e)=>{
            return expect(e.unsavedChanges).toEqual(true);
        });
    });

    test('.findCurrentState() returns default if set', () => {
        expect.hasAssertions();
        return expect(dashboardHandler.findCurrentState({defaultState:'thisDefault'})).toEqual('thisDefault');
    });

    test('.initDashboard() returns a dashboard with a default state', () => {
        expect.hasAssertions();
        return dashboardHandler.initDashboard({},{state:[]},(response)=>{
            return expect(response.states.length === 1).toEqual(true);
        });
    });

    test('.initDashboard() returns a dashboard with given state', () => {
        expect.hasAssertions();
        return dashboardHandler.initDashboard({},{state:[{id:111}]},(response)=>{
            return expect(response.states[0].id).toEqual(111);
        });
    });

    // test('.init({})', () => {
    //     expect.hasAssertions();
    //     return dashboardHandler.init({id:123}).then((e)=>{
    //         return expect(e).toHaveProperty('get');
    //     });
    // });

    // test('.init(id) calls then', () => {
    //     return expect(dashboardHandler.init(123)).resolves.toHaveProperty('info')
    // });

});