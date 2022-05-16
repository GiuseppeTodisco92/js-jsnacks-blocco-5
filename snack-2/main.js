const zucchina = [
    {
        varietà : "varietà1",
        peso : 1,
        lunghezza : 20,
    },
    {
        varietà : "varietà2",
        peso : 3,
        lunghezza : 8,
    },
    {
        varietà : "varietà3",
        peso : 2,
        lunghezza : 7,
    },
    {
        varietà : "varietà4",
        peso : 5,
        lunghezza : 30,
    },
    {
        varietà : "varietà5",
        peso : 2,
        lunghezza : 4,
    },
    {
        varietà : "varietà6",
        peso : 6,
        lunghezza : 12,
    },
    {
        varietà : "varietà7",
        peso : 7,
        lunghezza : 16,
    },
    {
        varietà : "varietà8",
        peso : 3,
        lunghezza : 18,
    },
    {
        varietà : "varietà9",
        peso : 2,
        lunghezza : 4,
    },
    {
        varietà : "varietà10",
        peso : 1,
        lunghezza : 20,
    },

]

console.log(zucchina.length);
let sumCorte = 0;
let sumLunghe = 0;
let zucchineCorte = [];
let zucchineLunghe = [];
let peso = 0;

for(let i = 0; i < zucchina.length; i++){
    const lunghezzaZucchina = zucchina[i].lunghezza;
     peso = zucchina[i].peso;
    if (lunghezzaZucchina < 15){
        zucchineCorte.push(zucchina[i].peso);
        sumCorte += peso;
    } else {
        zucchineLunghe.push(zucchina[i].peso);
        sumLunghe += peso;
    }
}

console.log("le zucchine corte pesano",sumCorte);
console.log("le zucchine lunghe pesano",sumLunghe)
