"use strict";

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</tr>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;

}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var abc = getDCofi.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.name == abc && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee.name.abc,coffee.roast.selectedRoast);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}






    // var input, filter, a, txtValue;
    // input = document.getElementById('coffeNameInput');
    // filter = input.value;
    // a = coffees[0];
    // txtValue = a.textContent || a.innerText;
    // for (a = 0; a < coffees.length; i++) {
    //    coffees.id[i]
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.indexOf(filter) > -1) {
    //         coffees[i].style.display = "";
    //
    //     } else {
    //         coffees[i].style.display = "none";
    //     }
    // }
//}

//var takeDatCopi = function () {

//   for (var i = 0; i > coffees.length; i++) {
//     //var c = (coffees[i]);
//     console.log(coffees[i]);
//   }
// }
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];






var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);

// displaying all
// for(var i = 0; i < coffees.length; i++){
//   document.getElementById('content').innerHTML = coffees[i];
// }


var getDCofi = document.getElementById('coffeNameInput');
// updateCoffees(getDCofi);


//getting coffee

