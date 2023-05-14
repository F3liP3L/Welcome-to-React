
// Con Js Vanilla lo comun es cambiar el codigo para que el funcionamineto funcione para todos.


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', function() {

        if(button.classList.contains('liked')){
            button.classList.remove('liked');
            button.innerText = 'No me gusta😿';
        } else {
            button.classList.add('liked');
            button.innerText = 'Me gusta❤️';
        }
    
    });
})

