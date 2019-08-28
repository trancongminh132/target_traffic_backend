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
export class Person {
	private name: string
	public age: number
	private weight: number
	public gender: string

	constructor(name: string, age: number, weight: number, gender: string) {
        this.name = name
        this.age = age
        this.weight = weight
        this.gender = gender
    }

    public getWeight(): number {
    	return this.weight
    }

    public getName(): string {
    	return this.name
    }
}

export class Animal {
	public name: string
	public age: number
	public weight: number
	public gender: string

	constructor(name: string, age: number, weight: number, gender: string) {
        this.name = name
        this.age = age
        this.weight = weight
        this.gender = gender
    }

    public getWeight(): number {
    	return this.weight
    }

    public getName(): string {
    	return this.name
    }
}

export enum VehicleColor {Red, Blue, Green, Black}
export enum VehicleType {Car, Bicycle}

export class Vehicle {
	public type: VehicleType
	public weight: number
	public number_wheel: number
	public color: VehicleColor
	public functional: string
	public number_door: number
	public object_inside: Array<Person | Animal>

	constructor(type: VehicleType, weight: number, number_wheel: number, color: VehicleColor, functional: string, number_door: number, object_inside: Array<Person | Animal>) {
        this.type = type
        this.weight = weight
        this.number_wheel = number_wheel
        this.color = color
        this.functional = functional
        this.number_door = number_door
        this.object_inside = object_inside
    }

    public setWeight(weight: number): void {
    	this.weight = weight
    }
}

export enum ScaleType {OnlyVehicle, AllPurpose}

export class Scale {
	public type: ScaleType
	public name: string

	constructor(type: ScaleType, name: string) {
        this.type = type
        this.name = name
    }

    public weighting(objects: Array<Person | Animal>): number {
    	var j
    	var weight: number = 0;
		for (j in objects) {
			weight += objects[j].getWeight()
		}
		return this.convertToKilogram(weight)
    }

    public convertToKilogram(weight: number): number {
    	return parseFloat((weight / 2.2046).toFixed(2))
    }

    public convertToPound(weight: number): number {
    	return parseFloat((weight * 2.2046).toFixed(2))
    }
}

export default class Exercise2 {
    constructor() {
        this.run();
    }

    public run(): void {
    	var person = new Person("Josh", 26, 120, "male");
    	var animal = new Animal("Timmy", 5, 15, "male");
    	var vehicle = new Vehicle(VehicleType.Car, 0, 4, VehicleColor.Red, "Smart", 3, [person, animal, animal]);
    	var scale_1 = new Scale(ScaleType.OnlyVehicle, "Weighbridge");
    	var scale_2 = new Scale(ScaleType.AllPurpose, "All Purpose");

    	var weight_total_pound: number = scale_1.convertToPound(2500)
    	var weight_vehicle = weight_total_pound - person.getWeight() - animal.getWeight()
    	vehicle.setWeight(weight_vehicle)

    	// weighting vehicle
    	console.log("Vehicle's weight: " + scale_1.convertToKilogram(weight_vehicle) + ' KG')
    	// weighting himself
    	var weight_himself = scale_2.weighting([person]);
    	console.log(person.getName() + "'s weight: " + weight_himself + ' KG')
    	// weighting dog
    	var weight_dog = scale_2.weighting([animal]);
		console.log(animal.getName() + "'s weight: " + weight_dog + ' KG')
    }
}
