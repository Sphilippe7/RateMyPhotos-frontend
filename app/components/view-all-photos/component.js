import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      updateRating(params) {
        const { item: photo, rating } = params;
        photo.set('rating', rating);
        return photo.save();
      }
    }
});
