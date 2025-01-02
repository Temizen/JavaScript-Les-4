//A. for (i = 8; i > 0; i--){
//       document.write(i + '<br/ >')
//      }
    
let i=8

while (i > 0){
    document.write(i + '<br />');
    i--;
}

//B. for ( i = 1; i <= 99; i = i*2){
//    i /= 1.5;
//    document.write(i + '<br/ >')
//}

let index = 1
while (index <= 99){
    index /= 1.5;
    document.write(index + '<br />');
    index = index*2;

}


//for (var nummer = 0 ; nummer <=100; nummer++){
//    if (nummer === 77){
//        document.write(nummer + '<br>');
//        break;
//    }
//}

let nummer = 0

while (nummer <=100){
    nummer++;
    if (nummer === 77){
        document.write(nummer + '<br>');
        break;
    }
}