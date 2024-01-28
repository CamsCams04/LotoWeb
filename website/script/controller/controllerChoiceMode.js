const buttonAuto = document.getElementById('buttonAuto');
const buttonManuel =document.getElementById('buttonManuel');
localStorage.setItem('numBoule', 'none');
localStorage.setItem('ancienneBoule', '');
buttonAuto.addEventListener('click', () => {
    localStorage.setItem('Mode', 'auto');
    localStorage.setItem('Partie', '0');
    localStorage.setItem('SousPartie', '0');
    window.location.href = 'choixPartie.html';
});

buttonManuel.addEventListener('click', () => {
    localStorage.setItem('Mode', 'manuel');
    localStorage.setItem('Partie', '0');
    localStorage.setItem('SousPartie', '0');
    window.location.href = 'choixPartie.html';
});
