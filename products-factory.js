//Created an array to hold the product objects
const products = [];

//Created an object for each product containing the properties of the product
let mockingbird = {
    "title": "To Kill a Mockingbird --First Edition",
    "author": "Harper Lee",
    "price": "$3,000.00",
    "img": "Mockingbird.jpg"
};

let gatsby = {
    "title": "The Great Gatsby --First Edition",
    "author": "F. Scott Fitzgerald",
    "price": "$6,000.00",
    "img": "gatsby.jpg"
};

let prejudice = {
    "title": "Pride and Prejudice --First Edition",
    "author": "Jane Austen",
    "price": "$8,000.00",
    "img": "prejudice.jpeg"
};

let orwell = {
    "title": "1984 --First Edition",
    "author": "George Orwell",
    "price": "$1,000.00",
    "img": "orwell.jpg"
};

let ring = {
    "title": "The Fellowship of the Ring --First Edition",
    "author": "J.R.R. Tolkien",
    "price": "$8,000.00",
    "img": "LOTR.jpeg"
};

let soldier = {
    "title": "A Soldier or the Great War --First Edition",
    "author": "Mark Helprin",
    "price": "$700.00",
    "img": "soldier.jpg"
};

let silver = {
    "title": "Silverlock --First Edition",
    "author": "John Myers Myers",
    "price": "$1,000.00",
    "img": "silverlock.jpeg"
};

let women = {
    "title": "Little Women --First Edition",
    "author": "Louisa May Alcott",
    "price": "$6,500.00",
    "img": "women.jpg"
};

let moby = {
    "title": "Moby Dick --First Edition",
    "author": "Herman Melville",
    "price": "$280.00",
    "img": "moby.jpg"
};

//Pushed all product objects into the products array.
products.push(mockingbird, gatsby, prejudice, orwell, ring, soldier, silver, women, moby);

//Created a constant variable holding the stringified array
const productsArchiveString = JSON.stringify(products);

//Stored the stringified array into LocalStorage.
localStorage.setItem("productsArchive", productsArchiveString);

//Created a variable to hold the parsed array pulled from LocalStorate
const storedProducts = JSON.parse(localStorage.getItem("productsArchive"));