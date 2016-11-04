import Ember from 'ember';

export default Ember.Component.extend({

  fullName: Ember.computed('question.author', 'question.authorlast', function() {
    return this.get('question.author') + " " + this.get('question.authorlast');
  }),

});
