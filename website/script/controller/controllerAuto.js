import {Alert}  from "../entities/Alert.js";

const titre = document.getElementById('titre');
const divLeft = document.getElementById('div-left');
const divRigth = document.getElementById('div-right');

const valuesPartie = JSON.parse(localStorage.getItem('values'));
const valuesDemarque = JSON.parse(localStorage.getItem('selectedSubPartValue'));

const nbPartie = localStorage.nbPartie;

const nombreTire = [];

divRigth.style.height = '80vh';
divLeft.style.height = '80vh';

console.log(valuesPartie);
console.log(valuesDemarque);


// création de la div de gauche

let i = parseInt(localStorage.Partie);
let j = parseInt(localStorage.SousPartie);


titre.innerText = 'Partie ' + (i+1) + ' : ' + valuesPartie[i][j];

createGrid(10, 9);


/*gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        const clickedDivId = gridItem.id;

        let clickedDiv = document.getElementById(clickedDivId);

        console.log('Div cliquée :', clickedDivId);
        clickedDiv.style.background = '#39969a';
        if (localStorage.numBoule === 'none'){
            localStorage.setItem('ancienneBoule', 'div');
        }else{
            localStorage.setItem('ancienneBoule', localStorage.numBoule);
        }
        localStorage.setItem('numBoule', clickedDivId);
        spanTextBoule.innerText = localStorage.ancienneBoule.substring(3);
        spanTextBouleTiree.innerText = localStorage.numBoule.substring(3);
    });
});*/


// création de la div de droite

const sectionImg = document.createElement('section');
const imgRoue = document.createElement('img');
const imgDerBoule = document.createElement('img');  // dernière boule tirée (celle en haut de page)
const imgBoule = document.createElement('img');     // boule actuellement tirée (celle en bas au milieu)
const spanTextBoule = document.createElement('span');
const spanTextBouleTiree = document.createElement('span');
const buttonFin = document.createElement('button');
const buttonPause = document.createElement('button');

// section de la dernière boule tirée en haut à droite

const sectionBoule = document.createElement('section');
const pMessage = document.createElement('p');

// section de la boule tirée en bas au milieu

const sectionBouleTiree = document.createElement('section');
const pMessageTiree = document.createElement('p');

pMessage.innerText = 'Dernière boule tirée :';
pMessage.style.marginBottom = '0';
sectionBoule.style.display = 'flex';
sectionBoule.style.flexDirection = 'column';
sectionBoule.style.position = 'relative';
sectionBoule.style.alignItems = 'center';


//spanTextBoule.innerText = localStorage.ancienneBoule.substring(3);
spanTextBoule.style.fontSize = '30px';
spanTextBoule.style.position = 'absolute';
spanTextBoule.style.top = '50%';
//spanTextBoule.style.left = '50%';
spanTextBoule.style.transform = 'translate(-50%; 50%)';


pMessageTiree.innerText = 'Boule Tirée :';
pMessageTiree.style.marginBottom = '0';
sectionBouleTiree.style.display = 'flex';
sectionBouleTiree.style.flexDirection = 'column';
sectionBouleTiree.style.alignItems = 'center';
sectionBouleTiree.style.position = 'relative';

//spanTextBouleTiree.innerText = '12';
spanTextBouleTiree.style.fontSize = '40px';
spanTextBouleTiree.style.position = 'absolute';
spanTextBouleTiree.style.top = '50%';
//spanTextBouleTiree.style.left = '50%';
spanTextBouleTiree.style.transform = 'translate(-50%; 50%)';

sectionImg.style.marginTop = '20px';

imgRoue.src = '../../asset/elements/tourne.png';
imgRoue.style.width = '150px';

imgDerBoule.src = '../../asset/elements/bouleVide.png';
imgDerBoule.style.width = '150px';

imgBoule.src = '../../asset/elements/bouleVide.png';
imgBoule.style.width = '200px';

buttonFin.innerText = 'Fin partie';
buttonFin.style.marginTop = '20px';

buttonPause.innerText = 'Pause';
buttonPause.style.marginTop = '20px';
buttonPause.style.marginLeft = '10px';

sectionBoule.appendChild(pMessage);
sectionBoule.appendChild(imgDerBoule);
sectionBoule.appendChild(spanTextBoule);

sectionBouleTiree.appendChild(pMessageTiree);
sectionBouleTiree.appendChild(imgBoule);
sectionBouleTiree.appendChild(spanTextBouleTiree);

divRigth.appendChild(sectionImg);
sectionImg.appendChild(imgRoue);
sectionImg.appendChild(sectionBoule);
divRigth.appendChild(sectionBouleTiree);

divRigth.appendChild(buttonFin);
divRigth.appendChild(buttonPause);

let isPaused = false;

buttonPause.addEventListener('click', () => {
    if(isPaused){
        intervalID = setInterval(intervalFunction, 2000);
        buttonPause.innerText = 'Pause';
    }else{
        clearInterval(intervalID);
        buttonPause.innerText = 'Reprendre';
    }
    isPaused = !isPaused;
});

let intervalID = setInterval(intervalFunction, 2000);

buttonFin.addEventListener('click', () => {
    clearInterval(intervalID);
    let sousPartieString = valuesDemarque[i];
    const sousPartie = parseInt(sousPartieString.substring(sousPartieString.indexOf(' ')+1));
    console.log(valuesDemarque[i]);
    if(parseInt(valuesDemarque[i].substring(11)) === j+1){
        demarquerGrille();
        const newAlert = new Alert("C'est l'heure de démarquer !",'Continuer','','demarque');
        newAlert.customAlert();
        document.addEventListener('continueAfterDemarquage', () => {
            continuerApresDemarquage();
        });

    }
    else{
        afficherFelicitation();
    }
});




/* création de la grille de jeu*/

function createGrid(rows, cols) {
    const container = document.createElement('section');
    container.classList.add('grid-container');

    container.style.width = (cols * 50) + 'px';
    container.style.height = (rows * 50) + 'px';

    let num = [
        [1,11,21,31,41,51,61,71,81],
        [2,12,22,32,42,52,62,72,82],
        [3,13,23,33,43,53,63,73,83],
        [4,14,24,34,44,54,64,74,84],
        [5,15,25,35,45,55,65,75,85],
        [6,16,26,36,46,56,66,76,86],
        [7,17,27,37,47,57,67,77,87],
        [8,18,28,38,48,58,68,78,88],
        [9,19,29,39,49,59,69,79,89],
        [10,20,30,40,50,60,70,80,90],
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.innerText = '' + num[i][j];
            div.id = 'div' + num[i][j];
            container.appendChild(div);
        }
    }

    divLeft.appendChild(container);
}

function tireBoule (){
    let nombreAleatoire = Math.floor(Math.random()*90)+1;
    while(nombreTire.includes(nombreAleatoire)){
        nombreAleatoire = Math.floor(Math.random()*90)+1;
    }
    return nombreAleatoire;
}

function intervalFunction(){
    const nombre = tireBoule();

    nombreTire.push(nombre);

    const clickedDivId = 'div' + nombre;

    let clickedDiv = document.getElementById(clickedDivId);

    console.log('Div cliquée :', clickedDivId);
    clickedDiv.style.background = '#39969a';

    if (localStorage.numBoule === 'none') {
        localStorage.setItem('ancienneBoule', '');
    } else {
        localStorage.setItem('ancienneBoule', localStorage.numBoule);
    }
    localStorage.setItem('numBoule', nombre);
    spanTextBoule.innerText = localStorage.ancienneBoule;
    spanTextBouleTiree.innerText = localStorage.numBoule;
}

function demarquerGrille() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.style.background = '';
    });
}

function afficherFelicitation() {
    if (i === nbPartie-1 && j === 2){
        const newAlert = new Alert("Félicitation au gagnant ! Le jeu est fini merci d'avoir joué !",'Fermer', '../../index.html', 'fin');
        newAlert.customAlert();
    } else {
        if(j+1 === 3){
            localStorage.setItem('SousPartie', '0');
            localStorage.setItem('Partie', (i+1));
        } else {
            localStorage.setItem('SousPartie', (j+1));
        }
        const newAlert = new Alert('Félicitation au gagnant !','Continuer', 'automatique.html', 'fin');
        newAlert.customAlert();
    }
}

function continuerApresDemarquage() {
    afficherFelicitation();
}