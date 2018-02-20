# km-transform

km-transform is a polyfill that extends JavaScript objects with a transform function that takes an anonymous function and returns a modified object.

The code is pretty straightforward:

```
   1 Object.prototype.transform = function(callback) {
   2
   3   var T, A;
   4
   5   if (this == null) {
   6     throw new TypeError('this is null or not defined');
   7   }
   8
   9   var O = Object(this);
  10
  11   if (typeof callback!== 'function') {
  12     throw new TypeError(callback + ' is not a function');
  13   }
  14
  15   if (arguments.length > 1) {
  16     T = arguments[1];
  17   }
  18
  19   transformedObject = callback.call(T, O);
  20
  21   return transformedObject;
  22 }
```

After running the polyfill, you can use it as follows:

```
var myObject = {
  name: 'mary'
};

var output = myObject.transform(x => x.name);
console.log(output); // 'mary'
console.log(myObject); // { name: 'mary' }
output = myObject.transform(x => x.name).transform(x => x.toUpperCase);
console.log(output); // 'MARY'
