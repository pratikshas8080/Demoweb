const number = document.querySelector( ".number" );
const countdown = 9;
let counter = countdown;
number.innerHTML = counter;

setInterval( ( ) => {
    counter--;
    number.innerHTML = counter;
    if ( counter === 1 ) {
        counter = countdown + 1;
    }
}, 1000 );