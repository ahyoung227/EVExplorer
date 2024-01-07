import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export interface Car {
  id: number;
  make: string;
  model: string;
  price: number;
  horsepower: number;
  mileage: number;
  image: string;
}

export interface CarState {
  cars: Car[];
  searchCars: Car[];
  curPageCars: Car[];
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
    searchCars: [],
    curPageCars: []
  }),
  getters: {
    getById:      
      (state: CarState) => 
        (id: number): Car => {
          return state.cars.find((car: Car) => car.id === id)!;
    }, 
    getCarsByHighIncentive: (state: CarState): Car[] =>
      [...state.cars].sort((a: Car, b: Car) => b.horsepower - a.horsepower),
    getMoreCar: 
      (state: CarState) => 
        (offset: number, limit: number) => {
          state.curPageCars = state.searchCars.slice(0, offset+limit);
        }
  },
  actions: {
    setAllCarData(data: Car[]) {
      this.cars = data;
      this.searchCars = data;
    },
    async searchByMake(make: string) {
      this.searchCars = this.cars.slice();
      this.searchCars.filter((car: Car) => car.make.includes(make));
    },
    async searchByModel(model: string) {
      this.cars = this.cars.filter((car: Car) => car.model === model);
    }
    // add(newCar: CarAdd) {
    //   const car: Car = {
    //     id: uuid(),
    //     model: "model 2",
    //     price: 1000,
    //     mileage: 13000,
    //     image: "",
    //     ...newCar
    //   };
    //   this.cars.push(car);
    // },
    // remove(id: string) {
    //   this.cars = this.cars.filter((car) => car.id != id);
    // },
    // update(id: string, carUpdate: CarUpdate) {
    //   const index = this.cars.findIndex(car=> car.id === id);
    //   this.cars[index] = { ...this.cars[index], ...carUpdate };
    // },
  },
});

