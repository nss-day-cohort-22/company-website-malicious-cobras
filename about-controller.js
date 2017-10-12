const store = JSON.parse(localStorage.getItem("storeLocations"))

const storeInfo = document.getElementsByClassName("stores")[0]

for (let key in store) {
    const currentStore = store[key]

    for (let i = 0; i < currentStore.length; i++) {
        let store = currentStore[i]
        storeInfo.innerHTML += `
        <article class=$(key)>
            <h3>${store.name}</h3>
            <p>${store.city}</p>
            <p>${store.stateregion}</p>
            <p>${store.country}</p>
            <p>${store.baekurrep}</p>
        </article>
`
}
}
