import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('question.author', 'question.authorlast', function() {
    return this.get('question.author') + " " + this.get('question.authorlast');
  }),
  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
