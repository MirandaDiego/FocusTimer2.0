let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {

    document.documentElement.classList.toggle('light') //document element é o html

    const mode = darkMode ? 'light' : 'dark'

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    darkMode = !darkMode //trocando de true  pra false e viceversa
})