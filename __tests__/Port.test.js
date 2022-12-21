/* globals describe it expect */
const Port = require ('../src/Port.js');
const Ship = require('../src/Ship.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', ()     => {
    describe('with ports and an itinerary', () => {
        let port;
        let titanic;

        beforeEach(() => {
            port = new Port('Dover')
            titanic = jest.fn();
        });
        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it('has a name property', () => {
            expect(port.name).toBe('Dover');
        });
    
        it('can add a ship', () => {
            const ship = jest.fn();

            port.addShip(titanic);

            expect(port.ships).toContain(titanic);
        });

        it('can remove a ship', () => {
            const queenMary = jest.fn();

            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        });
    });
});