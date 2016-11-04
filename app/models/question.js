import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  authorlast: DS.attr(),
  query: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
