import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDИдентификатор: DS.attr('number'),
  долгота: DS.attr('decimal'),
  название: DS.attr('string'),
  широта: DS.attr('decimal')
});

export let ValidationRules = {
  iDИдентификатор: {
    descriptionKey: 'models.i-i-s-mukha4-город.validations.iDИдентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  долгота: {
    descriptionKey: 'models.i-i-s-mukha4-город.validations.долгота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-mukha4-город.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  широта: {
    descriptionKey: 'models.i-i-s-mukha4-город.validations.широта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородE', 'i-i-s-mukha4-город', {
    название: attr('Название', { index: 0 }),
    широта: attr('Широта', { index: 1 }),
    iDИдентификатор: attr('I d идентификатор', { index: 2 }),
    долгота: attr('Долгота', { index: 3 })
  });

  modelClass.defineProjection('ГородL', 'i-i-s-mukha4-город', {
    название: attr('Название', { index: 0 }),
    широта: attr('Широта', { index: 1 }),
    iDИдентификатор: attr('I d идентификатор', { index: 2 }),
    долгота: attr('Долгота', { index: 3 })
  });
};
