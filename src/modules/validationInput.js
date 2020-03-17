const validationInput = () => {

    const body = document.querySelector('body');
    body.addEventListener('input', (event) => {
        let target = event.target;

        if (target.matches('input[name="name"]')) {
            target.value = target.value.replace(/[^а-яА-Я]/, '');
        }
    });

};
export default validationInput;