Barbone = require(__dirname + '/../barebone');
var _ = require(__dirname + '/../vendor/underscore');

describe("barebone", function() {
	it('initialize', function() {
		var Init = Barbone.Model.extend({
			initialize: function(attributes, options) {
				this.attributes.foo = attributes.foo;
			}
		});

		var init = new Init({foo: 'bananas'});
		expect(init.get('foo')).toBe('bananas');
        
	});

	it('defaults', function() {
		var values = {
			foo: 'bananas',
			bars: 'pears'
		};
		
		var Def = Barbone.Model.extend({
			defaults: values
		});

		var def = new Def();
		expect(def.get('foo')).toBe('bananas');
	});

	it('set', function() {
		var values = {
			foo: 'bananas',
			bars: 'pears'
		};
		var m = new Barbone.Model();
		var ret = m.set(values);
		expect(m.attributes).toEqual(values);
	});

	it('set trigger changes', function() {
		var m = new Barbone.Model();
		var changed = false;
		m.bind('change:foo', function() {changed = true;})
		
		m.set({foo: 'bananas'});
		expect(changed).toBe(true);
		
		m.set({foo: 'beets'});
		expect(changed).toBe(true);
	})



	it('get', function() {
		var m = new Barbone.Model();
		m.set({foo: 'bananas'});
		var value = m.get('foo');
		expect(value).toBe('bananas');
	});

	it('bind', function() {
		var m = new Barbone.Model();
		var winning = false;
		m.bind('winning', function() {winning = true})
		var events = m.events['winning'];
		expect(events.length).toBe(1);
		events[0].call();
		expect(winning).toBe(true);
	});

	it('trigger', function() {
		var m = new Barbone.Model();
		var winning = false;
		m.bind('winning', function() {winning = true;})
		m.trigger('winning');
		expect(winning).toBe(true);
	});

	it('trigger this', function() {
		var m = new Barbone.Model();
		var foo;
		m.bind('foo', function() {foo = this.get('foo');});
		m.set({foo: 'bananas'});
		m.trigger('foo');
		expect(foo).toBe('bananas');
	});

	it('trigger args', function() {
		var m = new Barbone.Model();
		var value, attr;
		m.bind('get', function(attr) {value = this.get(attr);});

		m.set({foo: 'bananas'});
		m.trigger('get', 'foo')
		expect(value).toBe('bananas');
	})
});