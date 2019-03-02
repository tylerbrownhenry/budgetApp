import Dashboard from './dashboard';
import samples from './dashboard.samples';
import data from './dashboard.defaults';

const { defaults, required } = data;

describe('Class Dashboard', () => {
  test('is defined', () => {
    expect(Dashboard).toBeDefined();
  });

  test('creates an object', () => {
    const newDashboard = new Dashboard();
    expect(typeof newDashboard).toEqual('object');
  });
});
