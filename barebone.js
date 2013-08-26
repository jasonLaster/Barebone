var _ = require(__dirname + '/vendor/underscore');
var extend = require(__dirname + '/lib/extend');
var Barebone = {};


Barebone.Model = function(attributes) {
  attributes || (attributes = {});

  this.events = {};
  this.attributes = {};
  this.set(this.defaults);
  this.initialize(attributes);
}

_.extend(Barebone.Model.prototype, {

  initialize: function() {},


  set: function(attributes) {

    var now = this.attributes;

    for(var attr in attributes) {
      var value = attributes[attr];

      if (now[attr] != value) {
        this.attributes[attr] = value;
        this.trigger('change:'+attr, this, value);
      }

    }
    return this;
  },

  get: function(attribute) {
    return this.attributes[attribute];
  }

});


Barebone.Events = {
  bind: function(event, callback) {
    console.log()
    this.events[event] || (this.events[event] = [])
    this.events[event].push(callback);
  },

  trigger: function(event) {
    var callbacks = this.events[event];

    if(!callbacks) {
      return this;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    for (i = 0, l = callbacks.length; i < l; i++) {
      var callback = callbacks[i];
      callback.apply(this, args);
    }

    return this;
  }
}
_.extend(Barebone.Model.prototype, Barebone.Events);


Barebone.Model.extend = extend;
module.exports = Barebone;
