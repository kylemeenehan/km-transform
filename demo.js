require('./km-transform');

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

// imperative
var copyOfPerson = Object.assign({}, originalPerson);
age(copyOfPerson);
shrink(copyOfPerson);
fatten(copyOfPerson);

// functional
var functionalCopyOfPerson = originalPerson.transform(age).transform(shrink).transform(fatten);


console.log(originalPerson);
console.log(copyOfPerson);
console.log(functionalCopyOfPerson);
