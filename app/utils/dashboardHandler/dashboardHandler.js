import i18next from '../i18next/i18next';
import stateHandler from '../stateHandler/stateHandler';
import Dashboard from '../../classes/dashboard/dashboard';
import State from '../../classes/state/state';

/**
 * Loads the avaliable state, sets one to current,
 * and process the data for display
 * @param {string} id - Dashboard id
 */
const init = function initilization(dashboard){
        return new Promise((resolve, reject) => {
            if(!dashboard.id){

            }
            stateHandler.init(dashboard.id).then(data => {
                dashboard.default = data.default;
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
const findCurrentState = function findsCurrentState(response){
    return response.defaultState ? response.defaultState : response.state[0];
}

const initDashboard = function initializedDashboard(dashboard, response, resolve){
    console.log('VERY LOUD',response);
    if(response.state.length === 0){
        response.state.push(new State());
        dashboard.unsavedChanges = true;
    }

    const thisDash = new Dashboard({
        name: dashboard.name,
        id: dashboard.id,
        currentState: findCurrentState(response),
        states: response.state,
        unsavedChanges: !!dashboard.unsavedChanges,
        messages: response.info ? [response.info] : []
    });
    
    console.log('thisDash',thisDash.get('states'));
    resolve(thisDash);
}

export default {
    init: (dashboard = { unsavedChanges: true })=>{
        return new Promise((resolve, reject) => {
            if(!dashboard || !dashboard.id){
                initDashboard(dashboard, {state:[]}, resolve);
            } else {
                init(dashboard).then((response) => {
                    initDashboard(dashboard, response, resolve);
                }).catch(reject);
            }
        });
    }
}