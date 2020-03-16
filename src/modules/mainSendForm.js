const mainSendForm = () => {
    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('banner-form'),
        formCardOrder = document.getElementById('card_order'),
        formFooter = document.getElementById('footer_form'),
        modelWindow = document.getElementById('thanks'),
        textModelWindow = document.querySelector('.form-content > p');
        

    const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 1.2rem; color: #fff; padding-top: 10px';

    const allForm = [form1, form2, form3, formFooter, formCardOrder];
        

    //Обработка модельного окна при отправке формы
    const closeModal = () => {
        modelWindow.style.display = 'none';
    };
    modelWindow.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            closeModal();
        }
        if (target.classList.contains('close-btn')) {
            closeModal();
        } else {
            target = target.closest('.form-content');

            if (!target) {
                closeModal();
            }
        }
    });

    allForm.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.append(statusMessage);
            const formData = new FormData(form);
            let target = event.target;

            
            let allInputs = form.querySelectorAll('input');
            for (let i = 0; i < allInputs.length; i++) {
                if (allInputs[i].value === '' && allInputs[i].id !== 'promocode') {
                    return;
                }
                
            }
            

            if(form.querySelector('.personal-data') && form !== formFooter){
                console.log(1);
                const checkPersonalData = form.querySelector('.personal-data');

                if (!(checkPersonalData.querySelector('input').checked)) {
                    statusMessage.textContent = 'Подтвердите согласие на обработку персональных данных';
                    return;
                }
            }

            let body = {};
            formData.forEach((value, key) => {
                if(value){
                    body[key] = value;
                }
                
            });
            setTimeout(() => {
                statusMessage.remove();
            }, 5000);
            
            
            statusMessage.textContent = 'Отправка данных на сервер';

            const postData = body => fetch('./server_id.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            postData(body).then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                modelWindow.style.display = 'block';
            }, () => {
                modelWindow.style.display = 'block';
                textModelWindow.textContent = 'Ошибка при отправке данных на сервер';

            });
            form.reset();
        });
    });

};
export default mainSendForm;