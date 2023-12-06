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
//SNACK 3
const articles = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red"
    },
    {
        name: "Jumping",
        type: "occhiali",
        color: "blue"
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black"
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink"
    }
]

//SNACK3
//Funzione che genera una lettera casuale
function generateRandomLetter() {
    //facciamo un "array" di tutte le lettere dell'alfabeto
    let lista = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //generiamo un numero che va da 1 a quante sono tutte le lettere
    let i = Math.floor(Math.random()*lista.length +1);
    //ritorniamo il valore dell array in posizione i (una lettera)
    return lista[i];
}

//funzione che crea l'articolo
function crateArticles(array) {
    const container = document.getElementById('articles');
    

    for (let i = 0; i < array.length; i++) {

        let article = document.createElement('div');
        article.classList.add('article');

        let head = document.createElement('div');
        let article_name = document.createElement('h5');
        let article_type = document.createElement('span');
        let article_letter = document.createElement('h5');

        let body = document.createElement('div');
        body.classList.add('d-flex');
        body.classList.add('align-items-end');
        body.innerText="colore: ";

        let color = document.createElement('div');
        color.classList.add('color');

        article_name.innerText = array[i].name;
        article_type.innerText = array[i].type;
        article_letter.innerText = array[i].letter;

        head.appendChild(article_name);
        head.appendChild(article_type);
        head.appendChild(article_letter);

        color.style.backgroundColor = array[i].color;

        body.appendChild(color);
        article.appendChild(head);
        article.appendChild(body);
        container.appendChild(article);
    }

}


//SNACK 1
let bici;
for (let i = 1; i < bikes.length; i++) {
    let {peso} = bikes[i];
    if(parseInt(peso) < bikes[0].peso){
        peso_minore = peso;
        bici = bikes[i].name;
    }
}

const mex = document.getElementById('mex');

let text = `la ${bici} è la bici che pesa di meno : ${peso_minore}`;

mex.innerText = text;
console.log(text);

//SNACK 2

teams.forEach(elem => {
    let add_score = Math.floor(Math.random()*100 + 1);
    let fouls = Math.floor(Math.random()*100 + 1);

    elem.puntiFatti = add_score;
    elem.falliSubiti = fouls;
});

const list = document.getElementById('list');

let falliSquadre = [];
for (let i = 0; i < teams.length; i++) {
    let ul = document.createElement('ul');
    ul.classList.add('list-unstyled');

    let item1 = document.createElement('li');
    let item2 = document.createElement('li');

    let {nome, falliSubiti} = teams[i];
    let obj = {};
    obj.squadra = nome;
    obj.falli_subiti = falliSubiti;
    falliSquadre.push(obj);

    item1.innerText = nome;
    item2.innerText = `Falli subiti: ${falliSubiti}`;

    ul.appendChild(item1);
    ul.appendChild(item2);
    list.appendChild(ul);

}
console.log(falliSquadre);

//SNACK 3

//copiamo l'array di oggetti degli articoli e gli aggiungiamo la lettera
const newArticles = [ ...articles ];

for (let i = 0; i < newArticles.length; i++) {
    let lettera = generateRandomLetter();
    newArticles[i].letter = lettera;
};
crateArticles(newArticles)
console.log(newArticles);