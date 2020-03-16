const dropDownMenu = () => {
const clubUl = document.querySelector('.clubs-list > ul');

document.addEventListener('click', (event) => {
    let target = event.target;

    if(target.closest('.clubs-list')){
        clubUl.style.display !== 'block' ? clubUl.style.display = 'block' : clubUl.style.display = 'none';
    }else {
        clubUl.style.display = 'none';
        return;
    }
});
};
export default dropDownMenu;