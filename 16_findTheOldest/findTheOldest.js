const findTheOldest = function(people) {
    let oldest = people[0];
    let age = 0;

    people.forEach(function(person) {
        let currentAge;
        
        if ('yearOfDeath' in person) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currentAge = 2025 - person.yearOfBirth;
        }

        person.age = currentAge;

        if (person.age > oldest.age) {
            oldest = person;
        }
    })

    return oldest;
    
        

};

// Do not edit below this line
module.exports = findTheOldest;
