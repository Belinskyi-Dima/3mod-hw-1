"use strict";
class Employee {
	constructor({name, age, salary} = {}) {
	this._name = name;
	this._age = age;
	this._salary = salary;
	// console.log(this);
}
get name () {
	return this._name;
}
set name (newName) {
	this._name = newName;
}

get age () {
	return this._age;
}
set age (newAge) {
	this._age = newAge;
}

get salary () {
return this._salary ;
}
set salary(newSalary) {
	this._salary = newSalary * 3;
	}
}
class Programmer extends Employee {
	constructor({name, age, salary ,lang}) {
		super({name, age, salary});
		this.lang = lang;
	}
	get salary () {
		return this._salary * 3;
	}

}

const programmer = new Programmer ({name: "Dima", age: 22,salary: 2000, lang: "italian"});
const operator = new Programmer ({name: "Andre", age: 28,salary: 900, lang: "espaniol"});
const manager = new Programmer ({name: "alex", age: 30, salary: 800});

console.log(programmer);
console.log(programmer.salary);
console.log(manager);
console.log(manager.salary);
console.log(operator);