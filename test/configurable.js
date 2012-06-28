
var Configurable = require('..');

describe('obj.', function(){
  var obj;

  beforeEach(function(){
    obj = Configurable({});
  })

  describe('.set(name, val)', function(){
    it('should set .settings[name] to val', function(){
      obj.set('foo', 'bar');
      obj.settings.foo.should.equal('bar');
    })

    it('should return itself', function(){
      obj.set('foo', 'bar').should.equal(obj);
    })
  })

  describe('.get(name)', function(){
    it('should get .settings[name]', function(){
      obj.set('foo', 'bar');
      obj.get('foo').should.equal('bar');
    })
  })

  describe('.enable(name)', function(){
    it('should set .settings[name] to true', function(){
      obj.enable('proxy');
      obj.get('proxy').should.equal(true);
    })

    it('should return itself', function(){
      obj.enable('proxy').should.equal(obj);
    })
  })

  describe('.disable(name)', function(){
    it('should set .settings[name] to false', function(){
      obj.disable('proxy');
      obj.get('proxy').should.equal(false);
    })

    it('should return itself', function(){
      obj.disable('proxy').should.equal(obj);
    })
  })

  describe('.enabled(name)', function(){
    it('should return true when enabled', function(){
      obj.enabled('proxy').should.be.false;
      obj.enable('proxy');
      obj.enabled('proxy').should.be.true;
    })
  })

  describe('.disabled(name)', function(){
    it('should return true when disabled', function(){
      obj.disabled('proxy').should.be.true;
      obj.enable('proxy');
      obj.disabled('proxy').should.be.false;
    })
  })
})
