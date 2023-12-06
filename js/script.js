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