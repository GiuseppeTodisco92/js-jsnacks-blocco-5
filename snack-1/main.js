// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
const zucchina = [
    {
        varietà : "varietà1",
        peso : 1,
        lunghezza : 20,
    },
    {
        varietà : "varietà2",
        peso : 3,
        lunghezza : 20,
    },
    {
        varietà : "varietà3",
        peso : 2,
        lunghezza : 20,
    },
    {
        varietà : "varietà4",
        peso : 5,
        lunghezza : 20,
    },
    {
        varietà : "varietà5",
        peso : 2,
        lunghezza : 20,
    },
    {
        varietà : "varietà6",
        peso : 6,
        lunghezza : 20,
    },
    {
        varietà : "varietà7",
        peso : 7,
        lunghezza : 20,
    },
    {
        varietà : "varietà8",
        peso : 3,
        lunghezza : 20,
    },
    {
        varietà : "varietà9",
        peso : 2,
        lunghezza : 20,
    },
    {
        varietà : "varietà10",
        peso : 1,
        lunghezza : 20,
    },

]

console.log(zucchina.length);
let sum = 0;
for(let i = 0; i < zucchina.length; i++){
    sum += zucchina[i].peso;
}
console.log("il peso delle zucchine è : ",sum);