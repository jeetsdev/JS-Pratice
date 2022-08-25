/**
 ** shallow copy creates a new copy of the first level hierarchy of elements and reference for the nested ones
 ** deep copy creates an entirely new copy including all the nested elements.
 **/

//!  Recursive method to deep copy an object... work with methods and date objects too
function deepCopy(input) {
	if (input == null || typeof input !== "object") {
		return input;
	}
	if (input instanceof Date) {
		return new Date(input);
	}
	let copy = Array.isArray(input) ? [] : {};
	for (const key in input) {
		copy[key] = deepCopy(input[key]);
	}
	return copy;
}

const obj1 = {
	name: "Jeet",
	address: {
		city: "gkp",
		pincode: 123456,
	},
	today: new Date("July 20, 69 20:17:40 GMT+00:00"),
	getData: function () {
		return `${this.name} is from ${this.address.city} and the pincode is ${this.address.pincode}.`;
	},
	nullValue: null,
};

const obj2 = deepCopy(obj1);
obj2.address.city = "lkh";

// * Shallow copy here
const obj3 = { ...obj1 }; //! Shallow copy here (till one level)
obj3.name = "Object 3"; //! Copied by value
obj3.address.city = "none"; //! Copied by reference

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);
console.log("data: ", obj2.getData());
console.log("obj3: ", obj3);
