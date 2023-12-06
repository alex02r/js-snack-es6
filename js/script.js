//SNACK 1
const bikes = [
    {
        name: "Endurace CF SLX 8",
        peso: "7"
    },
    {
        name: "Litening Air C:68X",
        peso: "6"
    },
    {
        name: "TCR Advanced",
        peso: "5"
    },
    {
        name: "KTM Revelator",
        peso: "10"
    },
    {
        name: "Raise AXS 07",
        peso: "8"
    },
    {
        name: "Aero M20ILTD",
        peso: "5"
    },
    {
        name: "Rose X-Lite 04",
        peso: "7",
    },
    {
        name: "Scott Addict SE",
        peso: "9"
    }
];
//SNACK 2
const teams = [
    {
        nome: "Juventus",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Inter",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Milan",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Napoli",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Roma",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Bologna",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Lazio",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Torino",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Sassuolo",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Monza",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Atalanta",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Empoli",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Verona",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Frosinone",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Genoa",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Lecce",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Udinese",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Cagliari",
        "punti fatti": "",
        "punti subiti": "",
    },
    {
        nome: "Salernitana",
        "punti fatti": "",
        "punti subiti": "",
    }
];


let peso_minore = 20;
let bici;
for (let i = 0; i < bikes.length; i++) {
    let {peso} = bikes[i];
    if(parseInt(peso) < peso_minore){
        peso_minore = peso;
        bici = bikes[i].name;
    }
}
let mex = `la ${bici} è la bici che pesa di meno : ${peso_minore}`;
console.log(mex);

//SNACK 2
