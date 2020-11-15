

  window.addEventListener("load", function(){
let prophets = 1;

    fetch('https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json')
  .then(response => response.json())
  .then(data => (prophets = data.prophets, displayProphetData()));


function displayProphetData(params) {
    console.log(prophets);

    

}



    let employees = [
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
      ]

    let element1 = document.getElementById("first");
      element1.innerHTML = employees[0].firstName + " " + employees[0].lastName

    let element2= document.getElementById("second");
    element2.innerHTML= employees[1].firstName + " " + employees[1].lastName

    let element3= document.getElementById("third");
    element3.innerHTML= employees[2].firstName + " " + employees[2].lastName


  });
