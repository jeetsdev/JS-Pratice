//! prototype for a custom method in objects

Object.prototype.myMethod = function () {
	console.log("this: ", this);
	return this.name + " is from " + this.city;
};

let obj = {
	language: "Hindi",
	getData: function () {
		return `${this.name} language is ${this.language}`;
	},
};

let obj1 = {
	name: "Jeet",
	city: "KnowWhere",
	language: "English",
	//! Setting this object prototype to obj
	__proto__: obj,
};

let obj2 = {
	name: "Wayne",
	city: "Gotham",
	//! Just inheriting the method
	getData: obj.getData,
	num: 200,
};

/**
 ** Always remember the value of __proto__ can be either an object or null
 ** There can be only one prototype
 **/

//  ! Get and set in prototype

let user = {
	name: "John",
	surname: "Smith",

	set fullName(value) {
		[this.name, this.surname] = value.split(" ");
	},

	get fullName() {
		return `${this.name} ${this.surname}`;
	},
};

let admin = {
	__proto__: user,
	isAdmin: true,
};

console.warn(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.warn(admin.fullName); // Alice Cooper, state of admin modified
console.warn(user.fullName); // John Smith, state of user protected

// Ref : "https://javascript.info/prototype-inheritance#prototype"