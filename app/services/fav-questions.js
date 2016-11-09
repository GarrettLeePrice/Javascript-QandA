import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    if(this.get('questions').includes(question)) {
      alert('already in favorites!');
    }else{
    this.get('questions').pushObject(question);
  }
}
});
