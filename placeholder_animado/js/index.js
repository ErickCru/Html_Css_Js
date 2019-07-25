const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.onfocus = () => {
        // # Hermano anterior
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus');
    }
    input.onblur = () => {
        // Trim elimina espacios.
        input.value = input.value.trim();

        if (input.value.trim().length == 0) {
            input.previousElementSibling.classList.remove('top');
            input.previousElementSibling.classList.remove('focus');
            input.parentNode.classList.remove('focus');
        }
    }
});
