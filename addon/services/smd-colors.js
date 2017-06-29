import Ember from 'ember';

const {
  Service
} = Ember;

export default Service.extend({
  colors: [
    'pink',
    'orange',
    'yellow',
    'green',
    'blue',
    'deep-purple',
    'brown',
  ]
  colorFor: function( /*group, value*/ ) {

  },
});
