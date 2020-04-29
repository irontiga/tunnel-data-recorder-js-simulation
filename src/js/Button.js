class Button {
    constructor (pin, cb) {
        this._pin = pin
        this._cb = cb
    }

    press () {
        // Presses button
        this._cb()
    }
}

export default Button