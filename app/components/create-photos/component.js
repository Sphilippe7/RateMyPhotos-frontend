import Ember from 'ember';

export default Ember.Component.extend({
  newPhoto: {
    url: null,
    name: null,
    category: null
  },
  actions: {
    createPhoto() {
      console.log('this.getphoto', this.get('newPhoto'));
      this.sendAction('createPhoto', this.get('newPhoto'));
      this.set('newPhoto.url', null);
      this.set('newPhoto.name', null);
      this.set('newPhoto.category', null);
    },
  }
});
