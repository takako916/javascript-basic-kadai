let num = Math.floor(Math.random() * 150);

switch (num) {
    case num%3===0:
        console.log('3の倍数です');
        break;
    
    case num%5===0:
        console.log('5の倍数です');
        break;

    case num%15===0:
         console.log('3と5の倍数です');
         break;

    default:
        console.log(num);
        break;
}