Barbone = require(__dirname + '/../barebone');
var _ = require(__dirname + '/../vendor/underscore');

describe("barebone", function() {
	describe('initialize', function(){
		it('set attribues', function() {

			var Init = Barbone.Model.extend({
				initialize: function(attributes, options) {
					this.attributes.foo = attributes.foo;
				}
			});

			var init = new Init({foo: 'bananas'});
			var foo = init.get('foo');
			expect(foo).toBe('bananas');
		});

		it('defaults', function() {
			var Def = Barbone.Model.extend({
				defaults: {
					foo: 'bananas',
					bars: 'pears'
				}
			});

			var def = new Def();
			// expect(def.get('foo')).toBe('bananas');
		});
	});

	describe('set', function() {
		it('key value', function() {
			var m = new Barbone.Model();
			var ret = m.set({foo: 'bananas'});
			expect(m.attributes.foo).toBe('bananas');
			expect(ret).toBe(m);
		});

		it('array of key values', function() {
			var values = {
				foo: 'bananas',
				bars: 'pears'
			};
			var m = new Barbone.Model();
			var ret = m.set(values);
			expect(m.attributes).toEqual(values);
		});
	});

	describe('get', function() {
		it('key', function() {
			var m = new Barbone.Model();
			m.set({foo: 'bananas'});
			var value = m.get('foo');
			expect(value).toBe('bananas');
		});
	});
});