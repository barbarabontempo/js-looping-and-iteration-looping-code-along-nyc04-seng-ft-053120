// Code your solutions in this file

function writeCards(array, name) {
    const tyCards = []
    for (let i = 0; i < array.length; i++) {
        tyCards.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    return tyCards;
}

function countDown(number) {
    let countup = 0
    while (countup <= number){
        console.log(countup++)
    }

}