let storeList = []

const locationLA =
{
    "name": "bækur Los Angeles",
    "city": "Los Angeles",
    "stateregion": "California",
    "country": "United States",
    "baekurrep": "Tyler Bowman" 
}

const locationIT =
{
    "name": "bækur Isola di Loreto",
    "city": "Isola di Loreto",
    "stateregion": "Lombardy",
    "country": "Italy",
    "baekurrep": "Chase Steely"
}

const locationRK =
{
    "name": "bækur Reykjavik",
    "city": "Reykjavik",
    "stateregion": "Capitol Region",
    "country": "Iceland",
    "baekurrep": "Deanna Vickers",
}

const locationTN =
{
    "name": "bækur Nashville",
    "city": "Nashville",
    "stateregion": "Tennessee",
    "country": "United States",
    "baekurrep": "Leah Duvic"
}

storeList.push(locationLA,locationIT,locationRK,locationTN)

let StoreLocations =
{
    "storeList": storeList
}

const storeLocationsString = JSON.stringify(StoreLocations)
localStorage.setItem("storeLocations", storeLocationsString)