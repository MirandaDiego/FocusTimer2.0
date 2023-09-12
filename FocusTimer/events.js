import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as el from "./elements.js"
import state from "./state.js";
import { updateDisplay } from "./timer.js";
import * as sounds from './sound.js'



export function registerControls() {
    controls.addEventListener('click', (e) => {
        const action = e.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {  // quando estiver focado, zerar os numeros
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)  //expressao regular para aceitar somente números

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()

        el.minutes.removeAttribute('contenteditable')
    })
}

el.cards.forEach((size) => {

    size.addEventListener('click', (e) => {

        document.querySelector(".cards.selecionado").classList.remove('selecionado');
        size.classList.add('selecionado')

        if (size.id == 'cafeteria') {
            sounds.chuva.pause()
            sounds.floresta.pause()
            sounds.lareria.pause()

            sounds.cafeteria.play()

        } if (size.id == 'fogueira') {
            sounds.cafeteria.pause()
            sounds.chuva.pause()
            sounds.floresta.pause()

            sounds.lareria.play()
        } if (size.id == 'floresta') {

            sounds.cafeteria.pause()
            sounds.chuva.pause()
            sounds.lareria.pause()

            sounds.floresta.play()
        } if (size.id == 'chuva') {
            sounds.cafeteria.pause()
            sounds.floresta.pause()
            sounds.lareria.pause()

            sounds.chuva.play()
        }


    })
})


