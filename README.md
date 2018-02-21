# km-transform

km-transform is a monkey patch that extends JavaScript objects with a transform function that receives a callback and returns a modified object.

Start off by installing the package:

```

npm install km-transform

```

Then either import or require it:

```

import 'km-transform';

// or

require('km-transform');

```

Then you're ready to go!

To see how it works, let's first declare a person object and some functions that will modify a person:

```

var originalPerson = {
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

function shrink(person) {
  person.height -= 2;
  return person;
}

function fatten(person) {
  person.weight += 5;
  return person;
}

```

From here, we can create a new modified person in an imperative manner without the transform:

```

// imperative - without transform

var copyOfPerson = Object.assign({}, originalPerson);
age(copyOfPerson);
shrink(copyOfPerson);
fatten(copyOfPerson);

```

Or we can create a new aged person in one line of code in a functional manner with the transform:

```

// functional

var functionalCopyOfPerson = originalPerson.transform(age).transform(shrink).transform(fatten);

```

It's important to note here that the transform supports the functional programming paradigm in that it doesn't modify the original object.

km-transform depends on Object.assign, which isn't supported in some browsers. If you need to support those brosers, be sure to use a polyfill.
