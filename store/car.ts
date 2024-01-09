import { defineStore } from "pinia";

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
  curOffset: number;
}

export interface CarAdd {
  make: string;
  horsepower: number;
}

export interface CarUpdate {
  make?: string;
  horsepower: number;
}
//Const
export const LIMIT : number = 6;

export const useCarStore = defineStore("carStore", {
  state: (): CarState => ({
    cars: [],
    searchCars: [],
    curOffset: 0
  }),
  getters: {
    getById:      
      (state: CarState) => 
        (id: number): Car => {
          return state.cars.find((car: Car) => car.id === id)!;
    }, 
    getMoreCar: 
      (state: CarState) => 
        () : Car[] => {
          return state.searchCars.slice(0, state.curOffset);
    },
    getCurOffset: 
      (state: CarState) =>
       () : number => {
        return state.curOffset;
    },
  },
  actions: {
    setAllCarData(data: Car[]) : void {
      this.cars = data;
      this.setDefaultCarData();
    },
    searchByWord(word: string) : Car[] | void {
      this.setDefaultCarData()
      this.searchCars = this.searchCars.filter((car: Car) => {
        return car.make.toLowerCase().startsWith(word.toLowerCase()) || car.model.toLowerCase().startsWith(word.toLowerCase());
      }
      );
    },
    sortBy(selected: string) : void {
        this.setDefaultCarData();
        this.searchCars.sort((a: Car, b: Car) => b.horsepower - a.horsepower);
    },
    setDefaultCarData() : void {
      this.searchCars = this.cars.slice();
    },
    setCurOffset(val: number) {
      this.curOffset = val;
    },
    setToDefaultPage() : void {
      this.setDefaultCarData();
      this.setCurOffset(LIMIT);
    }
  },
});

