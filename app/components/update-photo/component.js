import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editPhoto() {
      this.sendAction('editPhoto', this.get('photo'));
    },
  }
});
