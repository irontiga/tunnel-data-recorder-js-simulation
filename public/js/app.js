import { tracker, display, rangeSensor, camera, resetButton, calibrateButton, displayButton } from '../../src/js/main.js'

const displayDiv = document.getElementById('display')
const simulatedRangeInput = document.getElementById('simulatedRangeInput')
const wakeButtonElement = document.getElementById('wakeDisplayButton')
const flash = document.getElementById('cameraFlash')
const resetStatsButtonElement = document.getElementById('resetStatsButton')
const calibrateButtonElement = document.getElementById('calibrateButton')

display.onChange = () => {
    displayDiv.innerHTML = display.screenValue
    display.isAwake ? displayDiv.classList.remove("hidden") : displayDiv.classList.add("hidden")
}

resetStatsButtonElement.onclick = () => resetButton.press()
wakeButtonElement.onclick = () => displayButton.press()
calibrateButtonElement.onclick = () => calibrateButton.press()

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

