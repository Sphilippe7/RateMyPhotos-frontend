import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  actions: {
    create() {},
    destroy() {},
    update() {},
  }
});

Router.map(function() {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('your-photos');
  this.route('view-photos');
  this.route('createphoto');
});

export default Router;
