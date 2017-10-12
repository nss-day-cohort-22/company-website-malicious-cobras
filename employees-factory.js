// The factory deals with data. The factory should read from local storage and see if the database is there. If //it is, use that object, otherwise, build it and store it. 
//
//employee name, store based out of, favorite book, 

const leah = {
    "name": "Leah Duvic",
    "store": "Nashville, TN",
    "book": "My favorite book is Big Magic by Elizabeth Gilbert.",
    "img": "Leah.JPG"
}

const tyler = {
    "name": "Tyler Bowman",
    "store": "Los Angeles, CA",
    "book": "My favorite book is The Fellowship of the Ring by J. R. R. Tolkien.",
    "img":"IMG_2493-1.jpg"
}

const chase = {
    "name": "Chase Steely",
    "store": "Isola di Loreto, Italy",
    "book": "My favorite book is A Soldier of the Great War by Mark Helprin.",
    "img": "chase.jpg"
}

const deanna = {
    "name": "Deanna Vickers",
    "store": "Reykjavík, Iceland",
    "book": "My favorite book is Silverlock by John Myers Myers.",
    "img": "Deanna Profile-1.jpg"
}

let employeeList = []

employeeList.push(leah, tyler, chase, deanna)

let EmpDatabase = {
    "employeeList": employeeList
}



const employeeString = JSON.stringify(EmpDatabase)
localStorage.setItem("empDatabase", employeeString)


