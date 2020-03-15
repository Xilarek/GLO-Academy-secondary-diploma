const dropDownMenu = () => {
const clubList = document.querySelector('.clubs-list'),
    clubUl = document.querySelector('.clubs-list > ul');
    clubUl.classList.add('style-box');

    clubList.addEventListener('click', () => {
        console.log(1);
        let display = clubUl.style.display;

        if(display === 'none'){
            clubUl.style.display = 'block';
        }else {
            clubUl.style.display = 'none';
        }
        
    });
};
export default dropDownMenu;