// if statement
spaargeld = 2000.25//parseFloat(prompt('Hoeveel centen heb je?'))
if (spaargeld >= 2000) {
    laptop = true
    kopen = "Er is genoeg geld voor leuke dingen"
    }
else {
    laptop = false;
    kopen = "je hebt €" + spaargeld +" nog ff sparen man.";
}

document.getElementById('ifsAndElse').innerHTML = kopen;

// een klassieke WHILE loop om snel de tafels te zien

let teller = 10;
const getal = 10; //parseFloat(prompt('Welke Tafel', 10));
const hoogte = 1; //parseFloat(prompt('tot hoe ver? ', 10));

while (teller >= hoogte) {
    document.getElementById('tafels').innerHTML +=
      teller + ' x ' + getal + ' = ' + teller * getal + '<br />';
    teller -= 1;
    
}
// Een FOR loop
for (let index =  10; index >= 1; index -= 1){
    document.getElementById('divResult').innerHTML += getal + ' : ' + index + ' = ' + getal / index  + ' <br /> ';   
}

for (let i in window.navigator){
    document.getElementById('divResult2').innerHTML += i + ': ' + window.navigator[i] + '<br />';
}
for (let i in window.document){
    document.getElementById('divResult3').innerHTML += i + ': ' + window.document[i] + '<br />';
}