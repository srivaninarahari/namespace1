import { VehicleNameSpace } from "./interface";
import { carDetails } from "./function";
import { modelDetails } from "./function2";
let myCar:VehicleNameSpace.Car={
    model:"nano",
    engine:"K15B",
    horsepower:1200
}
carDetails(myCar);
let myCar1:VehicleNameSpace.Car={
    model:"nano",
    engine:"K15B2",
    horsepower:1300
}
 modelDetails(myCar1);
