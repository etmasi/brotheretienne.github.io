let day     = new Date().getDate();
let month   = new Date().getMonth() +1; 
let year    = new Date().getFullYear();
let hour    = new Date().getHours();
let minutes = new Date().getMinutes(); 
let seconds = new Date().getSeconds();

// console.log(month)

let LastUpdate = month+'/'+day+'/'+year+' '+ hour+':'+minutes+':'+seconds;

document.getElementById('LastUpdate').innerHTML = LastUpdate;
