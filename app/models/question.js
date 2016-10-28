import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  query: DS.attr(),
  notes: DS.attr()
});
