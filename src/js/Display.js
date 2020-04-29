const DISPLAY_SLEEP_TIMEOUT = 10 * 1000 // 10s

class Display {
    constructor () {
        this._screenValue = ''
        this._displaySleep = true
        this._sleepTimeout = void 0
        this._changed = () => {}
    }

    wake () {
        clearTimeout(this._sleepTimeout) // So that if the button is pressed again within the timeframe it'll keep the screen awake
        this._displaySleep = false
        this._changed()
        this._sleepTimeout = setTimeout(() => {
            this._displaySleep = true
            this._changed()
        }, DISPLAY_SLEEP_TIMEOUT)
    }

    write (value) {
        this._screenValue = value
        this._changed()
    }

    set onChange (cb) {
        this._changed = cb
    }

    get screenValue () {
        return this._screenValue
    }

    get isAwake () {
        return !this._displaySleep
    }
}

export default Display
