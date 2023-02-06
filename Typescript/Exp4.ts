// Class with constructor

// class vehicle{
//     brand:string;
//     model:string;
//     car_no:number;

//     constructor(brand:string, model:string,car_no:number){
//         this.brand = brand;
//         this.model = model;
//         this.car_no = car_no;
//     }

//     display():void{
//         console.log("Vehicle Brand: "+this.brand);
//         console.log("Vehicle Model: "+this.model);
//         console.log("Vehicle Car Number: "+this.car_no);
//     }
// }

// let obj = new vehicle("BMW","X1",123);
// obj.display();

// -----------------------------------------------

// Single Inheritance
// class vehicle{
//     type:string

//     constructor(type:string){
//         this.type = type;
//     }

// }

// class car extends vehicle{
//     brand:string;
//     model:string;

//     display_car(brand:string, model:string):void{
//         console.log("Vehicle Type: "+this.type)
//         console.log("Vehicle Brand: "+brand);
//         console.log("Vehicle Model: "+model);
//     }
// }

// var obj = new car("Four Wheeler");
// obj.display_car("BMW","x1");

// -------------------------------------------

// MultiLevel Inheritance
// class vehicle{
//     type:string;
//     brand:string;
//     model:string

//     constructor(type:string,brand:string,model:string){
//         this.type = type;
//         this.brand = brand;
//         this.model = model;
//     }

//     display_type():void{
//         console.log("Type: "+this.type);
//     }
// }

// class brand extends vehicle{
//     display_brand():void{
//         console.log("Brand: "+this.brand);
//     }
// }

// class model extends brand{

//     display_model():void{
//         console.log("Vehicle Model: "+this.model);
//     }
// }

// var obj = new model("Car","BMw","X1");
// obj.display_type();
// obj.display_brand();
// obj.display_model();

// -------------------------------------------

// Interface implementation in Class
interface car{
    type:string;
    brand:string;
    model:string;
    car_no:number;
    display_vehicle();
}

class vehicle implements car{
    type:string;
    brand:string;
    model:string;
    car_no:number;

    display_vehicle(){
        console.log("Vehicle Type: "+this.type)
        console.log("Vehicle Brand: "+this.brand);
        console.log("Vehicle Model: "+this.model);
        console.log("Vehicle Number: "+this.car_no);
    }

    constructor(type:string,brand:string,model:string,car_no:number){
        this.brand = brand;
        this.model = model;
        this.car_no = car_no;
        this.type = type;
    }
}

var obj = new vehicle("Car","BMW","X1",123);
obj.display_vehicle();