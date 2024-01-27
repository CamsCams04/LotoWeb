const titre = document.getElementById('titre');
const divLeft = document.getElementById('div-left');
const divRigth = document.getElementById('div-right');

const valuesPartie = JSON.parse(localStorage.getItem('values'));
const valuesDemarque = localStorage.getItem('selectedSubPartValue');

const nbPartie = localStorage.nbPartie;

divRigth.style.height = '80vh';
divLeft.style.height = '80vh';

console.log(valuesPartie);

let i = 0;
let j = 0;

titre.innerText = 'Partie ' + (i+1) + ' : ' + valuesPartie[i][j];

createGrid(10, 9);

const gridItems = document.querySelectorAll('.grid-item');


gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        const clickedDivId = gridItem.id;

        clickedDiv = document.getElementById(clickedDivId);

        console.log('Div cliquée :', clickedDivId);
        clickedDiv.style.background = '#39969a';
    });
});


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

