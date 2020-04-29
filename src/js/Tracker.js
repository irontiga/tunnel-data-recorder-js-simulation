class Tracker {
    constructor() {
        this._total = 0
        this._ranges = []
        this._onReset = () => {}
    }

    reset () {
        this._total = 0
        this._ranges = []
        this._onReset()
    }

    track (range) {
        this._total += 1
        this._ranges.push(range)
    }

    get total () {
        return this._total
    }

    get ranges () {
        return this._ranges
    }

    set onReset (cb) {
        this._onReset = cb
    }
}

export default Tracker
