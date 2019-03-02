import i18next from '../i18next/i18next';
import getData from '../getData/getData';
import processData from '../processData/processData';
import classes from '../../classes/classes';

const { State } = classes;

/**
 * Checks if current state is the default
 * @param  {object} response
 * @param  {object} state
 */
const process = function processDataItemFunction(response, state) {
  if (state.default) {
    response.defaultState = state.id;
  }
  return response;
}

export default {
  /**
     * Loads states associated to a dashbaord
     * @param  {string} id - Dashboard id
     */
  init: function initStateHandler(id) {
    return new Promise(((resolve, reject) => {
      getData.loadStates(id).then((data) => {
        const className = i18next.t('classes.state.name');
        return processData.convert(data.results, State, className, 'state', resolve, reject, process);
      }).catch(reject);
    }));
  },
}
