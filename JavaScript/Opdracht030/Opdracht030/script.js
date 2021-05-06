const buttonAlert = document.getElementsByClassName('.btn-alert');
const onButton = document.getElementById('mybutton');

const showAlert = () => {
    onButton.add(alert('Dit is een alert.'));
};

onButton.addEventListener('click', showAlert);

const colorButton = document.querySelector('change-bakground');
const bodyTag = document.querySelector('body')
//const colorRed = document.querySelector('.red-background')

const changeColor = () => {
    bodyTag.classList.add('.red-background');
};

colorButton.addEventListener('click', changeColor);
