import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mukha4-город-l');
  this.route('i-i-s-mukha4-город-e',
  { path: 'i-i-s-mukha4-город-e/:id' });
  this.route('i-i-s-mukha4-город-e.new',
  { path: 'i-i-s-mukha4-город-e/new' });
  this.route('i-i-s-mukha4-здание-l');
  this.route('i-i-s-mukha4-здание-e',
  { path: 'i-i-s-mukha4-здание-e/:id' });
  this.route('i-i-s-mukha4-здание-e.new',
  { path: 'i-i-s-mukha4-здание-e/new' });
  this.route('i-i-s-mukha4-метеостанция-l');
  this.route('i-i-s-mukha4-метеостанция-e',
  { path: 'i-i-s-mukha4-метеостанция-e/:id' });
  this.route('i-i-s-mukha4-метеостанция-e.new',
  { path: 'i-i-s-mukha4-метеостанция-e/new' });
});

export default Router;
