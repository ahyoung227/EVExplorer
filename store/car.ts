import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export interface Car {
  id: string;
  make: string;
  model: string;
  price: number;
  horsepower: number;
  mileage: number;
  image: string;
}

export interface CarState {
  cars: Car[];
}

export interface CarAdd {
  make: string;
  horsepower: number;
}

export interface CarUpdate {
  make?: string;
  horsepower: number;
}

export const useCarStore = defineStore("carStore", {
  state: (): CarState => ({
    cars: [],
  }),
  getters: {
    getById:
      (state: CarState) =>
      (id: string): Car => {
        return state.cars.find((car: Car) => car.id === id)!;
      },
    getCarsByHighIncentive: (state: CarState): Car[] =>
      [...state.cars].sort((a: Car, b: Car) => b.horsepower - a.horsepower)
  },
  actions: {
    add(newCar: CarAdd) {
      const car: Car = {
        id: uuid(),
        model: "model 2",
        price: 1000,
        mileage: 13000,
        image: "",
        ...newCar
      };
      this.cars.push(car);
    },
    remove(id: string) {
      this.cars = this.cars.filter((car) => car.id != id);
    },
    update(id: string, carUpdate: CarUpdate) {
      const index = this.cars.findIndex(car=> car.id === id);
      this.cars[index] = { ...this.cars[index], ...carUpdate };
    },
  },
});
