import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact\n\n');
  this.route('contact');
  this.route('about');
});

export default Router;
