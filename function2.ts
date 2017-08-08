import { VehicleNameSpace } from "./interface";
export function modelDetails(car:VehicleNameSpace.Car){
    console.log(`model:${car.model}, engine: ${car.engine}, horsepower: ${car.horsepower}`);

};
