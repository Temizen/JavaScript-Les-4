const geboortejaar = parseInt(prompt('In welk jaar bent u geboren?' , "1900"))

if (geboortejaar < 1980){
    console.log('U bent geboren voor 1980');
}
else {    
    console.log('U bent geboren in of na 1980');
}