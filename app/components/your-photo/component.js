import Ember from 'ember';

export default Ember.Component.extend({
  newPhoto: {
    url: null,
  },
  actions: {

    deletePhoto(photo) {
      console.log('photo is photo', photo);
      this.sendAction('deletePhoto', this.get('photo'));
    },
    createPhoto(newPhoto) {
      console.log('photo is photo', newPhoto);
      this.sendAction('createPhoto', this.get('newPhoto'));
    }
  }
});
