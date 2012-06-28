
var Configurable = require('..');

var obj = {};

Configurable(obj);

describe('.set(name, val)', function(){
  it('should set .settings[name] to val', function(){
    obj.set('foo', 'bar');
    obj.settings.foo.should.equal('bar');
  })
})

describe('.get(name)', function(){
  it('should get .settings[name]', function(){
    obj.set('foo', 'bar');
    obj.get('foo').should.equal('bar');
  })
})