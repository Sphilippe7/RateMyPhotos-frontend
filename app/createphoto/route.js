import Ember from 'ember';

export default Ember.Route.extend({
    flashMessages: Ember.inject.service(),

  model() {
    return this.get('store').createRecord('photo');
  },

  actions: {

    createPhoto(newPhoto) {
      console.log('photo is photo', newPhoto);
      let photo = this.get('store').createRecord('photo', newPhoto);
      photo.save();
      this.transitionTo('your-photos')
      .then(() => {
        this.get('flashMessages').success('You Posted a Photo');
      });
    },
  }
});
