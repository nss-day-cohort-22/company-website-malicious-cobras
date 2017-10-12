const stores = JSON.parse(localStorage.getItem("storeLocations"))

const storeInfo = document.getElementsByClassName("stores")[0]

for (let key in stores) {
    const currentStore = stores[key]

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

const mission = JSON.parse(localStorage.getItem("missionStmt"))

const missionInfo = document.getElementsByClassName("mission")[0]

for (let key in mission) {
    const currentMission = mission[key]

    for (let i=0; i < currentMission.length; i++) {
        let missiondes = currentMission[i]
        missionInfo.innerHTML += `
        <article class=$(key)>
            <h2>$(missiondes.stmt)</h2>
            `
    }
}