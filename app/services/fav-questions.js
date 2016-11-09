import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  remove(question) {
    this.get('questions').removeObject(question);
  },
  add(question) {
    if(this.get('questions').includes(question)) {
      alert('already in favorites!');
    }else{
    this.get('questions').pushObject(question);
  }
}
});
