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

