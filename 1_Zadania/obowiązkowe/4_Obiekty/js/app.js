//Zadanie 0a
const city = {
    capital: "Kraków",
    population: 100000,
    president: "Kowalski",
    primeMinister: ["Kaczor", "Donald", "Dudeł"]
}
console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinister);
// Zadanie 0b
const timeMachine = {
    shape: "shape",
    model: "model",
    run(date, place) {
        return "Jest " + date + " - " + place;
    }
}
console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run("20.10.2077", "Kraków"));

//Zadanie 1
const book = {
    title: "Outsider",
    author: "S. King",
    numberOfPage: 666
};
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPage);

//Zadanie 2
const person = {
    name: "Kuba",
    age: 23,
    sayHello() {
        console.log("hello");
    }
};
console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3
const recipe = {
    title: "Karpatka",
    servings: 10,
};

recipe.ingredients = ["krem", "budyń", "ciasto"];
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//Zadanie 6
const spoon = {
    isExist: true
};

const fork = spoon;
fork.isExist = false;
spoon.isExist ? console.log("Łyżka istnieje") : console.log("Łyżka nie istnieje");


