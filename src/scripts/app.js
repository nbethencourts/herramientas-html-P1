console.log('Prueba');
const btnLetras = document.querySelectorAll('.btnLetra');

btnLetras.forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
    
        if(event.target.nextElementSibling.hidden == true) {
            event.target.nextElementSibling.hidden = false;
            event.target.textContent = '-'
        } else {
            event.target.nextElementSibling.hidden = true;
            event.target.textContent = '+'
        }
    });
});