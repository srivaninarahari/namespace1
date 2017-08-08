import { VehicleNameSpace } from "./interface";
export function carDetails(car:VehicleNameSpace.Car){
    console.log(`model:${car.model}, engine: ${car.engine}, horsepower: ${car.horsepower}`);

};
