function getInput() {
    let inputName = document.getElementById("name").value;
    let inputSurname = document.getElementById("surname").value;
    let inputAge = document.getElementById("age").value;
    let table = document.querySelector('table');
    table.innerHTML += "<tr>" + "<td>" + inputName + "</td>" + "<td>" + inputSurname + "</td>" + "<td>" + inputAge + "</td>" + "</tr>";
};

document.getElementById("add_button").addEventListener("click", getInput);

function search() {
    let search_name_surname = document.getElementById("input_search").value;
    let table2 = document.querySelector('table').value;
    if (search_name_surname = table2) {
        console.log(table2)
    } else {
        console.log("Ele Ad ve ya Soyad yoxdu!");
    }
}
document.getElementById("searchButton").addEventListener("click", search);