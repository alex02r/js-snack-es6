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
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Inter",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Milan",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Napoli",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Roma",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Bologna",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Lazio",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Torino",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Sassuolo",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Monza",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Atalanta",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Empoli",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Verona",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Frosinone",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Genoa",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Lecce",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Udinese",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Cagliari",
        puntiFatti: "",
        falliSubiti: "",
    },
    {
        nome: "Salernitana",
        puntiFatti: "",
        falliSubiti: "",
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
    let add_score = Math.floor(Math.random()*100 + 1);
    let fouls = Math.floor(Math.random()*100 + 1);

    elem.puntiFatti = add_score;
    elem.falliSubiti = fouls;
});

let falliSquadre = [];
for (let i = 0; i < teams.length; i++) {
    let {nome, falliSubiti} = teams[i];
    let obj = {};
    obj.squadra = nome;
    obj.falli_subiti = falliSubiti;
    falliSquadre.push(obj);
}
console.log(falliSquadre);
