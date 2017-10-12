const missionStmt = {
    "stmt": "Rare. Books. Our first priority is the preservation and care of rare books that exist in the world. Other things we care about are reading, writing, dusting and organizing books."
}

const companyStory = {
    "heading": "How Baekur (pronounced bi-ker) came into being",
    "storycontent": "One day when our company founders were drinking some really strong Icelandic coffee (brought by Deanna to one of their book club gatherings), they had the idea to open a bookstore to share their favorite rare books. The first books they posted for sale were grabbed the first week. They started learning everything they could about how to care for rare books and began travaling the world to aquire the most sought after rare copies. They invested in training and equipment that would be needed to properly care for the most rare and valuable books in the world. Ten years after their launch, they are the premiere source of extremely rare books for the most discerning book collectors. They also offer classes and education to book owners to teach them how to care for their books."
}



const locationLA = {
    "name": "baekur Los Angeles",
    "city": "Los Angeles",
    "stateregion": "California",
    "country": "United States",
    "baekurrep": "Tyler Bowman"
    //ADD TYLER'S BIO HERE
}

const locationIT = {
    "name": "baekur Isola di Loreto",
    "city": "Isola di Loreto",
    "stateregion": "Lombardy",
    "country": "Italy",
    "baekurrep": "Chase Steely"
}

const locationRK = {
    "name": "baekur Reykjavik",
    "city": "Reykjavik",
    "stateregion": "Capitol Region",
    "country": "Iceland",
    "baekurrep": "Deanna Vickers",
}

const locationTN = {
    "name": "baekur Nashville",
    "city": "Nashville",
    "stateregion": "Tennessee",
    "country": "United States",
    "baekurrep": "Leah Duvic"
}

let storeList = []


storeList.push(locationLA,locationIT,locationRK,locationTN)

let StoreLocations = {
    "storeList": storeList
}

const storeLocationsString  = JSON.stringify(StoreLocations)
localStorage.setItem("storeLocations", storeLocationsString) 