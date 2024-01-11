function getInput() {
    let inputName = document.getElementById("name").value;
    let inputSurname = document.getElementById("surname").value;
    let inputAge = document.getElementById("age").value;
    let table = document.querySelector('table');
    table.innerHTML += "<tr>" + "<td>" + inputName + "</td>" + "<td>" + inputSurname + "</td>" + "<td>" + inputAge + "</td>" + "</tr>";
};

document.getElementById("add_button").addEventListener("click", getInput);

let search_name_surname = document.querySelector("#input_search");
let tableRowsALL = [...document.querySelectorAll('tr')].slice(1);

function inputSearch() {
    search_name_surname.addEventListener("change", function() {
        if (!search_name_surname) return;
        tableRowsALL.map((tr) => {
            tr.classList.remove("none")
            if (!tr.innerHTML.toLowerCase().includes(search_name_surname.value.trim("").toLowerCase())) {
                tr.classList.add("none")
            }
        })
    })
}

document.getElementById("searchButton").addEventListener("click", inputSearch);