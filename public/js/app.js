import { tracker, display, rangeSensor, camera } from '../../src/js/main.js'

const displayDiv = document.getElementById('display')
const simulatedRangeInput = document.getElementById('simulatedRangeInput')
const wakeButton = document.getElementById('wakeDisplayButton')
const flash = document.getElementById('cameraFlash')
const resetStatsButton = document.getElementById('resetStatsButton')

display.onChange = () => {
    displayDiv.innerHTML = display.screenValue
    display.isAwake ? displayDiv.classList.remove("hidden") : displayDiv.classList.add("hidden")
    
}

resetStatsButton.onclick = () => {
    tracker.reset()
}

camera.onTrigger = () => {
    flash.animate([
        {
            "opacity": 1
        },
        {
            "opacity": 0
        }
    ], {
        duration: 2000
    })
}

simulatedRangeInput.oninput = e => {
    const rangeVal = (100 - e.target.value) / 10
    rangeSensor.setSimulatedData(rangeVal)
}

wakeButton.onclick = () => {
    display.wake()
}
