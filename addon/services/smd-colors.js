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
  ],

  entries: [],

  colorFor: function(type,name) {
    var e = this.get('entries');
    var colors = this.get('colors');

    //Create empty property for type if undefined
    e[type] = e[type] || {};

    //Determine color
    var maxColors = colors.length;
    var currentNames = Object.keys(e[type]).length;
    var nameKeys = Object.keys( e[type] );

    var useColorIdx;
    if( e[type].hasOwnProperty(name) )
    {
      useColorIdx = e[type][name];
    }else{
      if(currentNames <= 0){
        useColorIdx = 0; //Initial value for type
      }else if(e[type][nameKeys[currentNames - 1]] >= maxColors - 1){ //Reached end of colour palette
        useColorIdx = 0;
      }else{
        useColorIdx = e[type][nameKeys[currentNames - 1]]+1; //Next colour
      }
      e[type][name] = useColorIdx;
    }

    return colors[useColorIdx];
  },

});
