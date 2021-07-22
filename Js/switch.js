const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardado del modo nocturno.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('modo-nocturno', 'true')
    } else {
        localStorage.setItem('modo-nocturno', 'false')

    }
});

//modo actual del dark mode.
if (localStorage.getItem('modo-nocturno') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.toggle('active');
} else {
    document.body.classList.remove('dark')
}