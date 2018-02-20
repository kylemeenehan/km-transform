Object.prototype.transform = function(callback) {

  var T;

  if (this == null) {
    throw new TypeError('this is null or not defined');
  }

  var O = Object(this);

  if (typeof callback!== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  if (arguments.length > 1) {
    T = arguments[1];
  }

  transformedObject = callback.call(T, O);

  return transformedObject;
}
