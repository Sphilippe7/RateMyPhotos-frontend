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
    createPhoto(newPhoto) {
      console.log('photo is photo', newPhoto);
      let photo = this.get('store').createRecord('photo', newPhoto);
      photo.save();
    }
  }
});
