import i18next from '../i18next/i18next';
import stateHandler from '../stateHandler/stateHandler';
import Dashboard from '../../classes/dashboard/dashboard';
import State from '../../classes/state/state';

/**
 * Loads the avaliable state, sets one to current,
 * and process the data for display
 * @param {string} id - Dashboard id
 */
const init = function initilization(dashboard) {
  return new Promise((resolve, reject) => {
    stateHandler.init(dashboard.id).then((data) => {
      resolve(data);
    }).catch(reject);
    // only function that will throw an error is 'getData'
    // on the api call, and it will have an error
    // with 'error' and 'details' as properties
  });
}

/**
 * Sets default state to current
 * if none were saved, it sets first state to current
 * @param  {object} response
 */
const findCurrentState = function findsCurrentState(r) {
  return r.defaultState ? r.defaultState : r.state[0];
}

/**
 * Returns a dashboard object, with the initial state set
 * @param  {object} dashboard - dashboard data
 * @param  {object} response - response from api
 * @param  {function} resolve
 */
const initDashboard = function initializedDashboard(
  dashboard,
  response,
  resolve,
) {
  let unsavedChanges = false;
  if (response.state.length === 0) {
    response.state.push(new State());
    unsavedChanges = true;
  }

  const thisDash = new Dashboard({
    name: dashboard.name,
    id: dashboard.id,
    currentState: findCurrentState(response),
    states: response.state,
    unsavedChanges,
    messages: response.info ? [response.info] : [],
  });

  resolve(thisDash);
}

export default {
  initDashboard,
  findCurrentState,
  init: (dashboard = {
    unsavedChanges: true,
  }) => new Promise((resolve, reject) => {
    if (!dashboard || !dashboard.id) {
      initDashboard(dashboard, {
        state: [],
      }, resolve);
    } else {
      init(dashboard).then((response) => {
        initDashboard(dashboard, response, resolve);
      }).catch(reject);
    }
  }),
}
