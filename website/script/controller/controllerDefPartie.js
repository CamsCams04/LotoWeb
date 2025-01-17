const buttonbPartie = document.getElementById('check');
const div = document.getElementById('div-right');
const buttonCommencer = document.getElementById('commencer');

buttonbPartie.addEventListener('click', () => {
    const inputNbPartie = document.getElementById('nbPartie');

    const nbPartie = inputNbPartie.value;
    localStorage.setItem('nbPartie', nbPartie);

    if(div.hasChildNodes()){
        while(div.firstChild){
            div.removeChild(div.lastChild);
        }
    }
    if(nbPartie !== ''){
        for(let i = 0; i<nbPartie; i++){
            const titre = document.createElement('p');
            titre.classList.add('title_game');
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
            secDem.classList.add("section_demarque");

            const demarque = document.createElement('p');
            demarque.innerText = 'quand faut-il demarquer ?';
            const div_select_demarque = document.createElement('div');
            div_select_demarque.id = 'div_select_demarque'

            for(let j=0; j<3; j++){
                const labelDemarque = document.createElement('label');
                labelDemarque.innerText = `Sous-partie ${j +1}`;
                const selectDemarque = document.createElement('select');
                const optSSP1 = document.createElement('option');
                const optSSP2 = document.createElement('option');

                optSSP1.innerText = 'oui';
                optSSP2.innerText = 'non';
                
                selectDemarque.id =`selectDemarque${i}-${j}`;
                const input_group = document.createElement('div');
                input_group.className = "div_input_group";

                input_group.appendChild(labelDemarque);
                input_group.appendChild(selectDemarque);
                
                div_select_demarque.appendChild(input_group);

                selectDemarque.appendChild(optSSP1);
                selectDemarque.appendChild(optSSP2);
            }
            div.appendChild(secDem);
            secDem.appendChild(demarque);
            secDem.appendChild(div_select_demarque);
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

            const selectDem = [];
            for(let j = 0; j<3; j++){
                const select = document.getElementById('selectDemarque0-' + j);
                selectDem.push(select.value);
            }

            for(let i = 1; i<nbPartie; i++ ){
                for(let j = 0; j<3; j++){
                    const select = document.getElementById('partie' + i + '-' + j);
                    select.value = values[j];
                    const selectDemRemp = document.getElementById(`selectDemarque${i}-${j}`);
                    selectDemRemp.value = selectDem[j];
                }
            }

        });

        buttonCommencer.addEventListener('click', () => {
            const values = [];
            const subPartValues = [];

            for(let i = 0; i<nbPartie; i++ ) {
                const val = [];
                const demVal = [];
                const divDem = document.querySelector('#demarque' + i);
                for (let j = 0; j < 3; j++) {
                    const select = document.getElementById('partie' + i + '-' + j);
                    val.push(select.value);
                    const demSelect = divDem.querySelector(`#selectDemarque${i}-${j}`);
                    demVal.push(demSelect.value)
                }
                values.push(val);
                subPartValues.push(demVal);
            }

            localStorage.setItem('values', JSON.stringify(values));
            localStorage.setItem('selectedSubPartValue', JSON.stringify(subPartValues));


            if (localStorage.Mode === 'auto'){
                window.location.href = 'automatique.html';
            }else{
                window.location.href = 'manuel.html';
            }

        });


    }


});


