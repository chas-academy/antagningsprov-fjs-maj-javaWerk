

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
    let names = ["Johan", "Annette", "Peter", "Sofie", "Kalle", "Hobbe"]

    for (name in names){
        console.log(names[name])
    }
 
}
uppg6()
module.exports = { uppg6 };