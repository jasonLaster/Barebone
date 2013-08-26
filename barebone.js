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
    _.extend(this.attributes, attributes);
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
}
_.extend(Barebone.Model.prototype, Barebone.Events);


Barebone.Model.extend = extend;
module.exports = Barebone;
