$('document').ready(function(){
console.log("allez...");

class Tomagatchi {
	constructor(name, age, hunger, sleep, bordom){
		this.name = name;
		this.age = age;
		this.hunger = hunger;
		this.sleep = sleep;
		this.bordom = bordom;
	}
	hungry(){
		console.log("I'm hungry!");
	}

	tired(){
		console.log("I'm sleepy!");
	}

	bored(){
		console.log("I'm bored...");
	}

};

const tg1 = new Tomagatchi();
	console.log(tg1);
	console.log(typeof(tg1));
	hunger = 5,
	sleep = 9,
	bordom = 1,
	age = 7;

});