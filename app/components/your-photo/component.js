import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    deletePhoto(photo) {
      console.log('photo is photo', photo);
      this.sendAction('deletePhoto', this.get('photo'));
    },
  }
});
