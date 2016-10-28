import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        query: this.get('query') ? this.get('query') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
      }
    }
});
