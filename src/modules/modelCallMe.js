const modelCallMe = () => {
    const btnCall = document.querySelector('.callback-btn'),
        modelCallbackForm = document.getElementById('callback_form');

    btnCall.addEventListener('click', () => {
        modelCallbackForm.style.display = 'block';
    });

    const closeModal = () => {
        modelCallbackForm.style.display = 'none';
    };

    modelCallbackForm.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            closeModal();
        } else {
            target = target.closest('.form-content');

            if(!target){
                closeModal(); 
            }
            
        }
    });
};
export default modelCallMe;