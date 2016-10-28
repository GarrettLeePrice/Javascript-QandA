import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    edit(question, params) {
      this.sendAction('edit', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
