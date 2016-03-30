import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('blogpost', {path: '/blogpost/:blogpost_id'});
});

export default Router;
