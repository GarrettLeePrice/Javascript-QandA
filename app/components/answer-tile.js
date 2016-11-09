import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
    this.sendAction('destroyAnswer', answer);
    }
  }
});
