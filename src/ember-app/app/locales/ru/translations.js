import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Mukha4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mukha4',
          title: 'Mukha4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
