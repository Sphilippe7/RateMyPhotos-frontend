import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  url: DS.attr('string'),
  editable: DS.attr('boolean'),
  rating: DS.attr('number')
  // userId: DS.attr('integer')
});
