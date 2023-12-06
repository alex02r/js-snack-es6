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
        "falli subiti": "",
    },
    {
        nome: "Inter",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Milan",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Napoli",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Roma",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Bologna",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Lazio",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Torino",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Sassuolo",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Monza",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Atalanta",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Empoli",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Verona",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Frosinone",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Genoa",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Lecce",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Udinese",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Cagliari",
        "punti fatti": "",
        "falli subiti": "",
    },
    {
        nome: "Salernitana",
        "punti fatti": "",
        "falli subiti": "",
    }
];


//SNACK 1
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

teams.forEach(elem => {
    let score = Math.floor(Math.random()*100 + 1);
    let fouls = Math.floor(Math.random()*100 + 1);

    elem["punti fatti"] = score;
    elem["falli subiti"] = fouls;
});

