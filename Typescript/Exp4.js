// Class with constructor
var vehicle = /** @class */ (function () {
    function vehicle(type, brand, model, car_no) {
        this.brand = brand;
        this.model = model;
        this.car_no = car_no;
        this.type = type;
    }
    vehicle.prototype.display_vehicle = function () {
        console.log("Vehicle Type: " + this.type);
        console.log("Vehicle Brand: " + this.brand);
        console.log("Vehicle Model: " + this.model);
        console.log("Vehicle Number: " + this.car_no);
    };
    return vehicle;
}());
var obj = new vehicle("Car", "BMW", "X1", 123);
obj.display_vehicle();
