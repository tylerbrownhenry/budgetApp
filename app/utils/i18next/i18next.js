import i18next from 'i18next';
import en from './en';


/*
*  Sets languages/text in a central location and prepares for translation later
*/
i18next.init({
  lng: 'en',
  debug: false,
  resources: {
    en
  },
});

export default i18next;
