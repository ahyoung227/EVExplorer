import { describe, test, expect, beforeAll, beforeEach, afterEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia';
import { CarState, useCarStore } from './car';

beforeAll(() => {
    setActivePinia(createPinia());
});

describe('useCarStore', () => {
    let store: ReturnType<typeof useCarStore>;

    beforeEach(()=>{
        store = useCarStore();
    });

    afterEach(()=>{
        store.$reset();
    });

    test('create a store', () => {
        const store = useCarStore();
        expect(store).toBeDefined();
    });

    test("initalizes with empty cars", () => {
        expect(store.cars).toStrictEqual([]);
    });

    // test("Add a new car", () => {
    //     store.add({
    //         make: "Audi",
    //         horsepower: 2000
    //     })
    //     expect(store.cars[0]).toBeDefined();
    //     expect(store.cars[0].make).toBe("Audi");
    //     expect(store.cars[0].horsepower).toBe(2000);
    // });

    // test("gets by id", () => {
    //     store.add({
    //         make: "Tesla",
    //         horsepower: 10000
    //     });

    //     const addedCar = store.cars[0];
    //     const carById = store.getById(addedCar.id);
    //     expect(addedCar).toStrictEqual(carById);
    // });

    // test("gets cars ordered by high incentive", () => {
    //     const cars = [
    //         {
    //             id: "1",
    //             make: "Genesis",
    //             model: "model 2",
    //             price: 1000,
    //             horsepower: 200,
    //             mileage: 13000,
    //             image: "",
    //         },
    //         {
    //             id: "2",
    //             make: "Lexus",
    //             model: "model 2",
    //             price: 1000,
    //             horsepower: 150,
    //             mileage: 13000,
    //             image: "",
    //         },
    //         {
    //             id: "3",
    //             make: "Ford",
    //             model: "model 2",
    //             price: 1000,
    //             horsepower: 1000,
    //             mileage: 13000,
    //             image: "",
    //         },
    //     ]

    //     store.cars = cars;

    //     const orderedCars = store.getCarsByHighIncentive
    //     expect(orderedCars[0].horsepower).toBe(1000);
    //     expect(orderedCars[1].horsepower).toBe(200);
    //     expect(orderedCars[2].horsepower).toBe(150);
    //     expect(store.cars[0].horsepower).toBe(200);
    // });

    // test("remove a car", ()=> {
    //     store.add({
    //         make: "Tesla",
    //         horsepower: 10000
    //     });

    //     const car = store.cars[0];
    //     store.remove(car.id);

    //     expect(store.cars).toStrictEqual([]);
    // });

    // test("update a car", () => {
    //     store.add({
    //         make: "Tesla",
    //         horsepower: 10000
    //     });

    //     const car = store.cars[0];
    //     store.update(car.id, { horsepower: 2500 }); 
    //     const updatedCar = store.cars[0];    

    //     expect(updatedCar.horsepower).toBe(2500);
    // })
});


