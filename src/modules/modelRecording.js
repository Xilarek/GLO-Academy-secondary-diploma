const modelRecording = () => {
    const visitBtn = document.querySelector('.free-visit'),
        formVisit = document.getElementById('free_visit_form');
       

    visitBtn.addEventListener('click', () => {
        formVisit.style.display = 'block';
    });

    const closeModal = () => {
        formVisit.style.display = 'none';
    };

    formVisit.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            closeModal();
        }
        if(target.classList.contains('btn-send')){
            closeModal();
        } else {
            target = target.closest('.form-content');

            if (!target) {
                closeModal();
            }
        }

    });

};
export default modelRecording;