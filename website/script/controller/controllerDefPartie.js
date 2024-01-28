const buttonbPartie = document.getElementById('check');
const div = document.getElementById('div-right');
const buttonCommencer = document.getElementById('commencer');

buttonbPartie.addEventListener('click', () => {
    const inputNbPartie = document.getElementById('nbPartie');

    const nbPartie = inputNbPartie.value;
    localStorage.setItem('nbPartie', nbPartie);

    for(let i = 0; i<nbPartie; i++){
        const titre = document.createElement('p');
        titre.innerText = 'Partie ' + (i+1) + ' :';
        div.appendChild(titre);

        for (let j = 0; j<3; j++){
            const select = document.createElement('select');
            select.id='partie' + i + "-" + j;

            const quine = document.createElement('option');
            quine.id = 'quine';
            quine.innerText = 'quine';

            const doubleQuine = document.createElement('option');
            doubleQuine.id = 'doubleQuine';
            doubleQuine.innerText = 'double quine';

            const cartonPlein = document.createElement('option');
            cartonPlein.id = 'cartonPlein';
            cartonPlein.innerText = 'carton Plein';


            div.appendChild(select);
            select.appendChild(quine);
            select.appendChild(doubleQuine);
            select.appendChild(cartonPlein);
        }
        const secDem = document.createElement('section');
        secDem.id = 'demarque' + i;

        const demarque = document.createElement('p');
        demarque.innerText = 'quand faut-il demarquer ?';

        const selectDemarque = document.createElement('select');
        const optSSP1 = document.createElement('option');
        const optSSP2 = document.createElement('option');
        const optSSP3 = document.createElement('option');

        optSSP1.innerText = 'sous-partie 1';
        optSSP2.innerText = 'sous-partie 2';
        optSSP3.innerText = 'sous-partie 3';

        div.appendChild(secDem);
        secDem.appendChild(demarque);
        secDem.appendChild(selectDemarque);
        selectDemarque.appendChild(optSSP1);
        selectDemarque.appendChild(optSSP2);
        selectDemarque.appendChild(optSSP3);
    }
    const buttonAppli = document.createElement('button');
    buttonAppli.innerText = 'appliquer à toutes';
    div.appendChild(buttonAppli);

    buttonAppli.addEventListener('click', () => {
        const values = [];

        for(let j = 0; j<3; j++){
            const select = document.getElementById('partie0-' + j);
            values.push(select.value);
        }
        const selectDem = document.querySelector('#demarque0 select');


        for(let i = 1; i<nbPartie; i++ ){
            for(let j = 0; j<3; j++){
                const select = document.getElementById('partie' + i + '-' + j);
                select.value = values[j];
            }
            const selectDemRemp = document.querySelector('#demarque' + i + ' select');
            selectDemRemp.value = selectDem.value;
        }

    });

    buttonCommencer.addEventListener('click', () => {
        const values = [];
        const subPartValues = [];

        for(let i = 0; i<nbPartie; i++ ) {
            const val = [];
            for (let j = 0; j < 3; j++) {
                const select = document.getElementById('partie' + i + '-' + j);
                val.push(select.value);
            }
            values.push(val);
            const selectDemar = document.querySelector('#demarque' + i + ' select');
            subPartValues.push(selectDemar.value);
        }

        localStorage.setItem('values', JSON.stringify(values));
        localStorage.setItem('selectedSubPartValue', JSON.stringify(subPartValues));


        if (localStorage.Mode === 'auto'){
            window.location.href = 'automatique.html';
        }else{
            window.location.href = 'manuel.html';
        }

    });



});


