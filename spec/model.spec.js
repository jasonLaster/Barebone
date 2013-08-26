var _ = require(__dirname + '/../vendor/underscore');
Barbone = require(__dirname + '/../barebone');

describe("barebone", function() {

	it('initialize', function() {
		var Init = Barbone.Model.extend({
			initialize: function(attributes) {
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
		expect(def.attributes).toEqual(values);
	});

	it('set', function() {
		var values = {
			foo: 'bananas',
			bars: 'pears'
		};
		var m = new Barbone.Model();
		var ret = m.set(values);
		expect(m.attributes).toEqual(values);
		expect(ret).toBe(m);
	});

	it('get', function() {
		var m = new Barbone.Model();
		m.set({foo: 'bananas'});
		expect(m.get('foo')).toBe('bananas');
	});

    describe("events", function() {
        it('bind', function() {
            var m = new Barbone.Model();
            var winning;
            m.bind('winning', function() {winning})
            var events = m.events['winning'];
            expect(events.length).toBe(1);
        });

        it('trigger', function() {
            var m = new Barbone.Model();
            var winning = false;
            m.bind('winning', function() {winning = true;})
            m.trigger('winning');
            expect(winning).toBe(true);
        });
    });
});
