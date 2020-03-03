import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista', {path: '/'});
  this.route('pessoa', {path: 'pessoa/:id'});
  this.route('nova');
});

export default Router;
