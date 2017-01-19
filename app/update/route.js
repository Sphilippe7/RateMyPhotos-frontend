import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findRecord('photo', params.photo_id);
  },
  actions: {
    editPhoto (photo) {
      console.log('photo is photo', photo);
      photo.save();
    },
  },
});
