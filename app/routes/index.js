import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // RSVP hash allows capability to load multiple js promises simultaneously
    return Ember.RSVP.hash({
      // calling the city.js and rental.js models bc we want to display both on the pg, return both from firebase (promise?)
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    keep3(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
  }
});
