// The job of the controller is to use the data to query and manipulate the DOM.

const employees = JSON.parse(localStorage.getItem("empDatabase"))
const employeeInfo = document.getElementsByClassName("employees")[0]
employeeInfo.innerHTML += "<h2>Our Employees:</h2>"

for (let key in employees) {
    const currentEmp = employees[key]
    
    for (let i = 0; i < currentEmp.length; i++) {
        let emp = currentEmp[i]
        employeeInfo.innerHTML += `
        <article class="${key}">
            <img src="${emp.img}" width="200px">
            <h3>${emp.name}</h3>
            <p>${emp.store}</p>
            <p>${emp.book}</p>
        </article>
        `
    }
}
