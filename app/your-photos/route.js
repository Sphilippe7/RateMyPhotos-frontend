import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').findAll('photo');
  },

  actions: {
    deletePhoto(photo) {
      console.log('photo is photo', photo);
      photo.destroyRecord();
    },

  }
});
