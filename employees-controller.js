// The job of the controller is to use the data to query and manipulate the DOM.

const employees = JSON.parse(localStorage.getItem("empDatabase"))
const employeeInfo = document.getElementsByClassName("employees")[0]
employeeInfo.innerHTML += "<h1>meet our employees!</h1>"

for (let key in employees) {
    const currentEmp = employees[key]
    
    for (let i = 0; i < currentEmp.length; i++) {
        let emp = currentEmp[i]
        employeeInfo.innerHTML += `
        <article class="${key}">
            <div class="info">
                <img src="${emp.img}" width="200px">
                    <div class="move">
                        <div class="box">
                            <h3>${emp.name}</h3>
                            <p>${emp.store}</p>
                            <p>${emp.book}</p>
                        </div>
                    </div>
            </div>
        </article>
        
        `
    }
}
