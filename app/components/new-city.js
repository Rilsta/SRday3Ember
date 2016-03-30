import Ember from 'ember';

export default Ember.Component.extend({
  // hide/show functionality
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    keep1() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.set('addNewCity', false);
      this.sendAction('keep2', params);
    }
  }
});
