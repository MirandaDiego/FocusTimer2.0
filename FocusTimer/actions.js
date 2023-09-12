import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'



export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()

}
export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}
export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}
export function increaseFive() {
    var tem = Number(el.minutes.innerHTML)
    if(tem >= 0 && tem < 60){
        timer.updateDisplay(tem + 5)
    }
}

export function decreaseFive() {
    var tem = Number(el.minutes.innerHTML)
    if(tem >= 5){
        timer.updateDisplay(tem - 5)
    }
    
}