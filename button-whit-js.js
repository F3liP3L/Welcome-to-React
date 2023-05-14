
// Con Js Vanilla lo comun es cambiar el codigo para que el funcionamineto funcione para todos.
const button = document.getElementById("me-gusta");

button.addEventListener('click', function() {

    if(button.classList.contains('liked')){
        button.classList.remove('liked');
        button.innerText = 'No me gusta😿';
    } else {
        button.classList.add('liked');
        button.innerText = 'Me gusta❤️';
    }

});
