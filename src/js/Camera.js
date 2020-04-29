class Camera {
    constructor (pin) {
        this._pin = pin
        this._outVoltage = 0
        this._onTrigger = () => {}
    }

    trigger () {
        // Should possibly set to high and then set to low again?
        this._outVoltage = 5
        this._onTrigger()
        setTimeout(() => { this._outVoltage = 0 }, 35) // Revert to 0 after 35ms
    }

    set onTrigger (cb) {
        this._onTrigger = cb
    }
}

export default Camera