

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    numbers =[6,3,7,1,2,4,6,88,34,23,0,101,44,67,76];

    function findOddEven(arrayOfNumbers){

        for (number of arrayOfNumbers){
            if (number % 2 == 0) {
                console.log(number + " jämt");
            } else {
                console.log(number + "  udda");
            }
        }
    }

    findOddEven(numbers);

  
}

uppg9 ();

module.exports = { uppg9 };