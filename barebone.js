var _ = require(__dirname + '/vendor/underscore');
var extend = require(__dirname + '/lib/extend');
var Barebone = {};


Barebone.Model = function(attributes, options) {
  attributes || (attributes = {});
  options || (options = {});

  this.attributes = {};

  this.set(this.defaults);
  this.initialize(attributes, options);
}



_.extend(Barebone.Model.prototype, {
  initialize: function(attributes, options) {
  },

  set: function(attributes, value) {
    _.extend(this.attributes, attributes);
    return this;
  },

  get: function(attribute) {
    return this.attributes[attribute];
  }

});



Barebone.Model.extend = extend;
module.exports = Barebone;