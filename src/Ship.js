class Ship {
    constructor(port) {
        this.currentPort = port;
    }

    setSail() {
        this.currentPort = false;
    }

    dock(port) {
        this.currentPort = port;
    }
}

module.exports = Ship;