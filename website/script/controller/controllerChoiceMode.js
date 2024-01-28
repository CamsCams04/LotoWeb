const buttonAuto = document.getElementById('buttonAuto');
const buttonManuel =document.getElementById('buttonManuel');
localStorage.setItem('numBoule', 'none');
localStorage.setItem('ancienneBoule', '');
buttonAuto.addEventListener('click', () => {
    localStorage.setItem('Mode', 'auto');
    window.location.href = 'choixPartie.html';
});

buttonManuel.addEventListener('click', () => {
    localStorage.setItem('Mode', 'manuel');
    window.location.href = 'choixPartie.html';
});
