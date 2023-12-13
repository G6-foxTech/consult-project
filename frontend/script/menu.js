const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const loginButton = document.querySelector('.button');
const loginA = document.querySelector('.button a')


for(const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const token = localStorage.getItem('token');

if(token) {
    loginA.innerText = 'SAIR'
}

if(loginA.innerText === 'SAIR') {
    loginA.addEventListener('click', () =>{
        localStorage.removeItem('token');
    })
}

