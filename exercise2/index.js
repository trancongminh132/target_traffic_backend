"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exercise 2
 *
 * Please render the given scenario into code.
 *
 * - A Person named Josh(26 years old, 120 pounds, male) is the owner of his Dog Timmy(5 years, 15 pounds, male).
 * - Josh is entering his Vehicle, a Car(4 wheels, red, Smart, 3 doors), in the front seat. He is putting his Dog in the back of the car, as front seats are only to be used by Humans.
 * - Josh takes his Car to a Weighbridge, a special Scale that can only be used by Vehicles. Tim and Josh stay in the Car, the Scale displays 2500KG.
 * - After weighting the Car, including them being passenger, Josh decides to weight himself. Since the weightbridge can only be used by Vehicles he decides to go for the "all purpose" Scale next to it. The Scale displays the weight in KG.
 * - He is also weighting his Dog.
 *
 */
class Person {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    getWeight() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
}
exports.Person = Person;
class Animal {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    getWeight() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
}
exports.Animal = Animal;
var VehicleColor;
(function (VehicleColor) {
    VehicleColor[VehicleColor["Red"] = 0] = "Red";
    VehicleColor[VehicleColor["Blue"] = 1] = "Blue";
    VehicleColor[VehicleColor["Green"] = 2] = "Green";
    VehicleColor[VehicleColor["Black"] = 3] = "Black";
})(VehicleColor = exports.VehicleColor || (exports.VehicleColor = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Bicycle"] = 1] = "Bicycle";
})(VehicleType = exports.VehicleType || (exports.VehicleType = {}));
class Vehicle {
    constructor(type, weight, number_wheel, color, functional, number_door, object_inside) {
        this.type = type;
        this.weight = weight;
        this.number_wheel = number_wheel;
        this.color = color;
        this.functional = functional;
        this.number_door = number_door;
        this.object_inside = object_inside;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
exports.Vehicle = Vehicle;
var ScaleType;
(function (ScaleType) {
    ScaleType[ScaleType["OnlyVehicle"] = 0] = "OnlyVehicle";
    ScaleType[ScaleType["AllPurpose"] = 1] = "AllPurpose";
})(ScaleType = exports.ScaleType || (exports.ScaleType = {}));
class Scale {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
    weighting(objects) {
        var j;
        var weight = 0;
        for (j in objects) {
            weight += objects[j].getWeight();
        }
        return this.convertToKilogram(weight);
    }
    convertToKilogram(weight) {
        return parseFloat((weight / 2.2046).toFixed(2));
    }
    convertToPound(weight) {
        return parseFloat((weight * 2.2046).toFixed(2));
    }
}
exports.Scale = Scale;
class Exercise2 {
    constructor() {
        this.run();
    }
    run() {
        var person = new Person("Josh", 26, 120, "male");
        var animal = new Animal("Timmy", 5, 15, "male");
        var vehicle = new Vehicle(VehicleType.Car, 0, 4, VehicleColor.Red, "Smart", 3, [person, animal, animal]);
        var scale_1 = new Scale(ScaleType.OnlyVehicle, "Weighbridge");
        var scale_2 = new Scale(ScaleType.AllPurpose, "All Purpose");
        var weight_total_pound = scale_1.convertToPound(2500);
        var weight_vehicle = weight_total_pound - person.getWeight() - animal.getWeight();
        vehicle.setWeight(weight_vehicle);
        // weighting vehicle
        console.log("Vehicle's weight: " + scale_1.convertToKilogram(weight_vehicle) + ' KG');
        // weighting himself
        var weight_himself = scale_2.weighting([person]);
        console.log(person.getName() + "'s weight: " + weight_himself + ' KG');
        // weighting dog
        var weight_dog = scale_2.weighting([animal]);
        console.log(animal.getName() + "'s weight: " + weight_dog + ' KG');
    }
}
exports.default = Exercise2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBYSxNQUFNO0lBTWxCLFlBQVksSUFBWSxFQUFFLEdBQVcsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLENBQUM7SUFFTSxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ25CLENBQUM7SUFFTSxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2pCLENBQUM7Q0FDSjtBQXBCRCx3QkFvQkM7QUFFRCxNQUFhLE1BQU07SUFNbEIsWUFBWSxJQUFZLEVBQUUsR0FBVyxFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVNLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDbkIsQ0FBQztJQUVNLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDakIsQ0FBQztDQUNKO0FBcEJELHdCQW9CQztBQUVELElBQVksWUFBc0M7QUFBbEQsV0FBWSxZQUFZO0lBQUUsNkNBQUcsQ0FBQTtJQUFFLCtDQUFJLENBQUE7SUFBRSxpREFBSyxDQUFBO0lBQUUsaURBQUssQ0FBQTtBQUFBLENBQUMsRUFBdEMsWUFB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