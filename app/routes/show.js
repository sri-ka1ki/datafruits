import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://datafruits.streampusher.com/scheduled_shows/'+params.id+'.json')
    .then(function(data){
      return data;
    });
  }
});
