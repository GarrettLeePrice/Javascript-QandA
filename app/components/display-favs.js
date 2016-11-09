import Ember from 'ember';

export default Ember.Component.extend({
  favQuestions: Ember.inject.service(),
  fullName: Ember.computed('question.author', 'question.authorlast', function() {
    return this.get('question.author') + " " + this.get('question.authorlast');
  }),
  actions: {
    deleteFav(question) {
      this.get('favQuestions').remove(question);
    },
  }
});
