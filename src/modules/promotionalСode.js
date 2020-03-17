const promotionalСode = () => {
    const promotionalBox = document.querySelector('.fixed-gift'),
        modelWindowPromotional = document.getElementById('gift'),
        body = document.body;

    if (!promotionalBox) return;
    promotionalBox.addEventListener('click', () => {
        modelWindowPromotional.style.display = 'block';
        body.classList.add('noScroll');
        promotionalBox.remove();
    });

    const closeModelWindow = () => {
        modelWindowPromotional.style.display = 'none';
        body.classList.remove('noScroll');
    };
    modelWindowPromotional.addEventListener('click', (event) => {

        let target = event.target;
        if (target.classList.contains('.close_promotional')) {
            closeModelWindow();
        }
        if (target.classList.contains('close_btn_promotional')) {
            closeModelWindow();
        } else {
            target = target.closest('.content-prize');
            if (!target) {
                closeModelWindow();
            }
        }
    });
};
export default promotionalСode;