import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMukha4ГородLForm from './forms/i-i-s-mukha4-город-l';
import IISMukha4ЗданиеLForm from './forms/i-i-s-mukha4-здание-l';
import IISMukha4МетеостанцияLForm from './forms/i-i-s-mukha4-метеостанция-l';
import IISMukha4ГородEForm from './forms/i-i-s-mukha4-город-e';
import IISMukha4ЗданиеEForm from './forms/i-i-s-mukha4-здание-e';
import IISMukha4МетеостанцияEForm from './forms/i-i-s-mukha4-метеостанция-e';
import IISMukha4ГородModel from './models/i-i-s-mukha4-город';
import IISMukha4ЗданиеModel from './models/i-i-s-mukha4-здание';
import IISMukha4МетеостанцияModel from './models/i-i-s-mukha4-метеостанция';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mukha4-город': IISMukha4ГородModel,
    'i-i-s-mukha4-здание': IISMukha4ЗданиеModel,
    'i-i-s-mukha4-метеостанция': IISMukha4МетеостанцияModel
  },

  'application-name': 'Mukha4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Mukha4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mukha4',
          title: 'Mukha4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        mukha4: {
          caption: 'Mukha4',
          title: 'Mukha4',
          'i-i-s-mukha4-метеостанция-l': {
            caption: 'Метеостанция',
            title: ''
          },
          'i-i-s-mukha4-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-mukha4-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-mukha4-город-l': IISMukha4ГородLForm,
    'i-i-s-mukha4-здание-l': IISMukha4ЗданиеLForm,
    'i-i-s-mukha4-метеостанция-l': IISMukha4МетеостанцияLForm,
    'i-i-s-mukha4-город-e': IISMukha4ГородEForm,
    'i-i-s-mukha4-здание-e': IISMukha4ЗданиеEForm,
    'i-i-s-mukha4-метеостанция-e': IISMukha4МетеостанцияEForm
  },

});

export default translations;
