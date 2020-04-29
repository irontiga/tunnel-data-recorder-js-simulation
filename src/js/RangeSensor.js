class RangeSensor {
    constructor (pin) {
        this._pin = pin
        this._sensorValue = 10
    }

    read () {
        return this._sensorValue
    }

    setSimulatedData (value) {
        this._sensorValue = value
    }
}

export default RangeSensor