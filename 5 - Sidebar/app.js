
function myFunc() {
    let button = document.querySelector('#icon');
    let bg = document.querySelector('.sidebar');
    let item = document.querySelectorAll('html body .a-wrapper');
    if (button.classList.contains('fa-x')) 
    {
        button.classList.remove('fa-x');
        button.classList.add('fa-bars');
        button.style.color = 'cyan';
        bg.style.transform = 'translateX(-26.5vw)';
        bg.style.background = 'inherit';
    }
    else if (button.classList.contains('fa-bars')) 
    {
        button.classList.remove('fa-bars');
        button.classList.add('fa-x');
        bg.style.transform = 'translateX(0px)';
        bg.style.background = '#eee';
        button.style.color = 'initial';
        // bg.style.background = 'inherit';
    }
}