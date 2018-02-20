# km-transform

km-transform is a monkey patch that extends JavaScript objects with a transform function that takes an anonymous function and returns a modified object.

The code is pretty straightforward:

```
   1 Object.prototype.transform = function(callback) {
   2
   3   var T;
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
  19   return callback.call(T, O);
  20
  21 }
```

To see how this works, let's first declare a person object and a function that ages the person:

```
var person = {
  name: 'Mary',
  age: 31,
  height: 173,
  weight: 70,
};

function age(person) {
  person.age += 10;
  person.height -= 2;
  person.weight += 5;
  return person;
}

```

From here, we can create a new aged person in an imperative manner without the transform:

```

// imperative - without transform

copyOfPerson = Object.assign({}, person);
age(copyOfPerson);

```

Or we can create a new aged person in one line of code in a functional manner with the transform""

```

// functional

functionalCopyOfPerson = person.transform(age);

```
