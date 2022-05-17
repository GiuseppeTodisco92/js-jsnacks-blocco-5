// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.

const auto = [
    {
        marca : "Fiat",
        modello : "Tipo",
        alimentazione : "Benzina",
    },
    {
        marca : "mercedes",
        modello : "GLS",
        alimentazione : "elettrica",
    },
    {
        marca : "Ford",
        modello : "Focus",
        alimentazione : "Diesel",
    },
    {
        marca : "Fiat",
        modello : "fiorino",
        alimentazione : "gas",
    },
    {
        marca : "Peugeot",
        modello : "3008",
        alimentazione : "Diesel",
    },
    {
        marca : "Fiat",
        modello : "500",
        alimentazione : "Benzina",
    },
    {
        marca : "mercedes",
        modello : "GLS",
        alimentazione : "elettrica",
    },
    {
        marca : "Ford",
        modello : "Focus",
        alimentazione : "Diesel",
    },
    {
        marca : "Fiat",
        modello : "fiorino",
        alimentazione : "gas",
    },
    {
        marca : "Peugeot",
        modello : "3008",
        alimentazione : "Diesel",
    },
   
   

]

console.log("auto",auto.length);

const autoBenzina = auto.filter((auto) =>{
    if(auto.alimentazione === "Benzina"){
        return true
    }
})

const autoDiesel = auto.filter((auto) =>{
    if(auto.alimentazione === "Diesel"){
        return true
    } 
})

const autoEco = auto.filter((auto) =>{
    if(auto.alimentazione != "Diesel" && auto.alimentazione != "Benzina" ){
        return true
    } 
})

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoEco);