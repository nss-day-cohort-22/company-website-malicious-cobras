const products = [];

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

products.push(mockingbird, gatsby, prejudice, orwell, ring, soldier, silver, women, moby);

const productsArchiveString = JSON.stringify(products);
localStorage.setItem("productsArchive", productsArchiveString);

const storedProducts = JSON.parse(localStorage.getItem("productsArchive"));