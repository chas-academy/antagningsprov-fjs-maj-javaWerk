

function uppg8(){

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument

    let names = [{name:"Johan", age:30}, {name:"Annette", age:45}, {name:"Peter", age:42}, {name:"Sofie", age:13}, {name:"Kalle", age:54}];

    function overThirty(personArray){

        for (person of personArray){
            if (person.age > 30){
                console.log(person.name);
            }
        }
    }

    overThirty(names);

}



module.exports = { uppg8 };