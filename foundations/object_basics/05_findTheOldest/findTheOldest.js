const findTheOldest = function (people) {
  people.forEach((element) => {
    if ("yearOfDeath" in element) {
      element.age = element.yearOfDeath - element.yearOfBirth;
    } else {
      const currentYear = new Date().getFullYear();
      element.age = currentYear - element.yearOfBirth;
    }
  });
  const oldestPerson = people.reduce((currentOldest, currentPerson) => {
    if (currentPerson.age > currentOldest.age) {
      return currentPerson;
    } else {
      return currentOldest;
    }
  });
  return oldestPerson;
};
/*const findTheOldest = function (people) {
  people.forEach((element) => {
    if ("yearOfDeath" in element) {
      element.age = element.yearOfDeath - element.yearOfBirth;
    } else {
      const currentYear = new Date().getFullYear();
      element.age = currentYear - element.yearOfBirth;
    }
  });
  const ages = people.map((element) => element.age);
  ages.sort((a, b) => b - a);
  const oldest = ages[0];
  const oldestPerson = people.find((element) => element.age === oldest);
  return oldestPerson;
};*/

// Do not edit below this line
module.exports = findTheOldest;
