
/**
 * Make `obj` configurable.
 *
 * @param {Object} obj
 * @return {Object} the `obj`
 * @api public
 */

module.exports = function(obj){

  obj.settings = {};

  obj.set = function(name, val){
    this.settings[name] = val;
    return this;
  };

  obj.get = function(name){
    return this.settings[name];
  };

  return obj;
};