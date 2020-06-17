const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'jsr',
        temp: 92
    }
}

const {name = 'Anonymous', age} = person

// const name = person.name
// const age = person.age

console.log(`${name} is ${age}`)

const {city, temp: temperature} = person.location
console.log(`it's ${temperature} in ${city}`)