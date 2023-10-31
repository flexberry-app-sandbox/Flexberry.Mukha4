import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  влажность: DS.attr('decimal'),
  городID: DS.attr('number'),
  долгота: DS.attr('decimal'),
  местоположение: DS.attr('string'),
  название: DS.attr('string'),
  текущаяТемп: DS.attr('decimal'),
  широта: DS.attr('decimal'),
  город: DS.belongsTo('i-i-s-mukha4-город', { inverse: null, async: false })
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  влажность: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.влажность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  городID: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.городID.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  местоположение: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.местоположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  текущаяТемп: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.текущаяТемп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-mukha4-метеостанция.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МетеостанцияE', 'i-i-s-mukha4-метеостанция', {
    название: attr('Название', { index: 0 }),
    iDИдентификатор: attr('I d идентификатор', { index: 1 }),
    местоположение: attr('Местоположение', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    долгота: attr('Долгота', { index: 4 }),
    городID: attr('Город ID', { index: 5 }),
    влажность: attr('Влажность', { index: 6 })
  });

  modelClass.defineProjection('МетеостанцияL', 'i-i-s-mukha4-метеостанция', {
    название: attr('Название', { index: 0 }),
    iDИдентификатор: attr('I d идентификатор', { index: 1 }),
    местоположение: attr('Местоположение', { index: 2 }),
    широта: attr('Широта', { index: 3 }),
    долгота: attr('Долгота', { index: 4 }),
    городID: attr('Город ID', { index: 5 }),
    влажность: attr('Влажность', { index: 6 })
  });
};
