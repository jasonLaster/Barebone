var _ = require(__dirname + '/../vendor/underscore');
Barbone = require(__dirname + '/../barebone');

describe("barebone", function() {

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

});