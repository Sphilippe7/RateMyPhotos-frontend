import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click() {
      console.log('i clicked');
    },
    deletePhoto() {
      console.log('it is gone!');
    }
  }
});
