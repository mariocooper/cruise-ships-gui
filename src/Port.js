class Port {
    constructor(name, ships) {
        this.name = name;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        this.ships.pop(ship);
    }
}

module.exports = Port;