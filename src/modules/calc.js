const calc = () => {
    
    const calcForm = document.getElementById('card_order'),
        clubMozaika = document.getElementById('card_leto_mozaika'),
        clubSchelkovo = document.getElementById('card_leto_schelkovo'),
        price = document.getElementById('price-total'),
        allCard = document.querySelectorAll('input[name="card-type"]'),
        promocodeInput = document.getElementById('promocode');

    let promocode = 0;

    calcForm.addEventListener('change', (event) => {
        let target = event.target;

        if (target.matches('input[type="radio"]')) {
            count();
        } else {
            return;
        }
    });

    if(promocodeInput){
        promocodeInput.addEventListener('change', (event) => {
            const target = event.target;
    
            if (target.value === 'ТЕЛО2020') {
                promocode = 30;
                count();
            } else {
                promocode = 0;
                count();
            }
        });
    }
    
    const count = () => {

        let total = 0,
            card = 0;

        if (clubMozaika.checked) {
            allCard.forEach((item) => {
                if (item.checked) {
                    switch (item.checked) {
                        case item.value == 1:
                            card = 1999;
                            break;
                        case item.value == 6:
                            card = 9900;
                            break;
                        case item.value == 9:
                            card = 13900;
                            break;
                        case item.value == 12:
                            card = 19900;
                            break;
                        default:
                            card = 1999;
                    }
                }
            });

        } else if (clubSchelkovo.checked) {
            allCard.forEach((item) => {
                if (item.checked) {
                    switch (item.checked) {
                        case item.value == 1:
                            card = 2990;
                            break;
                        case item.value == 6:
                            card = 14990;
                            break;
                        case item.value == 9:
                            card = 21990;
                            break;
                        case item.value == 12:
                            card = 24990;
                            break;
                        default:
                            card = 2990;
                    }
                }
            });
        }

        total = Math.ceil(card * (1 - (promocode / 100)));
        price.textContent = total;

    };
};
export default calc;