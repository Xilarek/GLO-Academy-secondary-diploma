const mainSendForm = () => {
    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('banner-form'),
        formFooter = document.getElementById('footer_form'),
        check1 = document.getElementById('check1'),
        check = document.getElementById('check'),
        check2 = document.getElementById('check2'),
        checkMozaika = document.getElementById('footer_leto_mozaika'),
        checkSchelkovo = document.getElementById('footer_leto_schelkovo'),
        modelWindow = document.getElementById('thanks'),
        textModelWindow = document.querySelector('.form-content > p');

    const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 1.2rem; color: #fff; padding-top: 10px';

    const allForm = [form1, form2, form3, formFooter],
        allCheck = [check, check1, check2, checkMozaika, checkSchelkovo];

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

    for (let i = 0; i < allForm.length; i++) {
        allForm[i].addEventListener('submit', (event) => {
            event.preventDefault();
            allForm[i].append(statusMessage);
            const formData = new FormData(allForm[i]);
            let target = event.target;

            if (target.matches('#banner-form') || target.matches('#form1') || target.matches('#form2')) {
                let allInputs = target.querySelectorAll('input');
                for (let i = 0; i < allInputs.length; i++) {
                    if (allInputs[i].value === '') {
                        return;
                    }
                }
            }

            let body = {};
            formData.forEach((value, key) => {
                body[key] = value;
            });
            setTimeout(() => {
                statusMessage.remove();
            }, 5000);

            
                if (!(check.checked || check1.checked || check2.checked || checkMozaika.checked ||
                     checkSchelkovo.checked)) {
                    statusMessage.textContent = 'Подтвердите согласие на обработку персональных данных';
                    allForm[i].reset();
                    return;
                }
            
            

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
            allForm[i].reset();
        });
    }

};
export default mainSendForm;