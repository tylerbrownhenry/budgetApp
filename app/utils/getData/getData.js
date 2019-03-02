import i18next from '../i18next/i18next';

export default {
    /**
     * Makes the api calls to fetch data
     * @param  {string} id
     */
    loadStates: function loadStateData(id){
        /* 
        Fetch saved state data
        */
       return new Promise((resolve, reject) => {
           /*
           Make api call...
           ...
           ...
           */
            const data = {
                results:[]
            };
            if (id) {
                resolve(data);
            } else {
                const error = i18next.t('error.api.failed', {details:"Something happened..."});
                reject({error});
            }
      });
    }
}