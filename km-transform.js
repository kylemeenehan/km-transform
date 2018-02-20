Object.prototype.transform = function(callback) {

  var T;

  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  var O = Object.assign({}, this);

  if (typeof callback!== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  if (arguments.length > 1) {
    T = arguments[1];
  }

  return callback.call(T, O);
}
