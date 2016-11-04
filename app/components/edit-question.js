import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('question.author', 'question.authorlast', function() {
    return this.get('question.author') + " " + this.get('question.authorlast');
  }),
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        authorlast: this.get('authorlast') ? this.get('authorlast') : "",
        query: this.get('query') ? this.get('query') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
      }
    }
});
