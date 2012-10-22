
/**
 * Make `obj` configurable.
 *
 * @param {Object} obj
 * @return {Object} the `obj`
 * @api public
 */

module.exports = function(obj){

  /**
   * Mixin settings.
   */

  obj.settings = {};

  /**
   * Set config `name` to `val`, or
   * multiple with an object.
   *
   * @param {String|Object} name
   * @param {Mixed} val
   * @return {Object} self
   * @api public
   */

  obj.set = function(name, val){
    if (1 == arguments.length) {
      for (var key in name) {
        this.set(key, name[key]);
      }
    } else {
      this.settings[name] = val;
    }

    return this;
  };

  /**
   * Get setting `name`.
   *
   * @param {String} name
   * @return {Mixed}
   * @api public
   */

  obj.get = function(name){
    return this.settings[name];
  };

  /**
   * Enable `name`.
   *
   * @param {String} name
   * @return {Object} self
   * @api public
   */

  obj.enable = function(name){
    return this.set(name, true);
  };

  /**
   * Disable `name`.
   *
   * @param {String} name
   * @return {Object} self
   * @api public
   */

  obj.disable = function(name){
    return this.set(name, false);
  };

  /**
   * Check if `name` is enabled.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  obj.enabled = function(name){
    return !! this.get(name);
  };

  /**
   * Check if `name` is disabled.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  obj.disabled = function(name){
    return ! this.get(name);
  };

  return obj;
};