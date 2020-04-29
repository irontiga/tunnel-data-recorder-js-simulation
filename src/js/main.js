import RangeSensor from './RangeSensor.js'
import Button from './Button.js'
import Camera from './Camera.js'
import Display from './Display.js'
import Tracker from './Tracker.js'

import getDisplayHTML from './getDisplayHTML.js'
import { default as cs } from './convertRawRangeSensorData.js'

const LOOP_DELAY = 200 // check every 200ms

const RANGE_SENSOR_BASELINE = 10 // cm
let rangeSensorBaseline = RANGE_SENSOR_BASELINE

const DISPLAY_BUTTON_PIN = 5
const RESET_BUTTON_PIN = 6
const CALIBRATE_BUTTON_PIN = 7

const RANGE_SENSOR_PIN = 'A0'

const CAMERA_PIN = 8
const DISPLAY_PIN = 9

export const display = new Display(DISPLAY_PIN)
export const camera = new Camera(CAMERA_PIN)
export const rangeSensor = new RangeSensor(RANGE_SENSOR_PIN)
export const tracker = new Tracker()

const displayButton = new Button(DISPLAY_BUTTON_PIN, () => {
    display.wake()
})
const resetButton = new Button(RESET_BUTTON_PIN, () => {
    tracker.reset()
})
const calibrateButton = new Button(CALIBRATE_BUTTON_PIN, () => {
    rangeSensorBaseline = cs(rangeSensor.read()) * 0.98
})

const updateDisplay = () => {
    display.write(getDisplayHTML(tracker.total, tracker.ranges))
}
updateDisplay()

tracker.onReset = () => {
    updateDisplay()
}

let animalPresent = false
function loop () {
    const range = cs(rangeSensor.read())
    if (range < RANGE_SENSOR_BASELINE) {
        if (animalPresent == false) {
            animalPresent = true

            camera.trigger()
            tracker.track(range)

            updateDisplay()
        } else {
            // Who cares, this is still the same animal and has been dealt with already.
        }
    } else {
        animalPresent = false
    }
    // Check sensor all the time
    setTimeout(() => loop(), LOOP_DELAY)
}

loop()
