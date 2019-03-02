import Dashboard from './dashboard';
import samples from './dashboard.samples';
import data from './dashboard.defaults';
const {defaults, required} = data;

test('Dashboard is defined', () => {
    expect(Dashboard).toBeDefined();
});

test('new Dashboard creates an object', () => {
    let newDashboard = new Dashboard();
    expect(typeof newDashboard).toEqual('object');
});
  