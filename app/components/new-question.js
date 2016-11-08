import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        authorlast: this.get('authorlast') ? this.get('authorlast') : "",
        query: this.get('query') ? this.get('query') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };

      this.set('author', '');
      this.set('authorlast', '');
      this.set('query', '');
      this.set('notes', '');
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
