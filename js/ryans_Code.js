class Tamagotchi {
	constructor(name){
		this.name = name;
		this.boredom = 1;
		this.sleepiness = 1;
		this.hunger = 1;
		this.age = 1;
	}
	eat(){
		if(this.hunger > 1){
			this.hunger -=1;
		}
	}
}

let morty = new Tamagotchi("Morty");
let seconds = 0;

$('.start-game').click(function(){
	const timePassing = () => {
	console.log(`IT HAS BEEN ${seconds} seconds`)
	seconds++;
	if(seconds % 3 == 0){
		morty.hunger++;
	}
	if(seconds % 10 == 0){
		morty.boredom++;
	}
	if(seconds % 25 == 0){
		morty.sleepiness++;
	}
	if(seconds % 60 == 0){
		morty.age++;
	}
	if(Math.floor(Math.random() * 10) > 4){
		morty.eat();
	}
	if(morty.hunger >= 10 || morty.boredom >= 10 || morty.sleepiness >= 10){
		console.log("FUNERAL SERVICES HELD SUNDAY FOR MORTY")
		clearInterval(timePasses);
		//MORE DEATH STUFF
	}
	console.log(`sleepiness: ${morty.sleepiness}`)
	console.log(`hunger: ${morty.hunger}`)
	console.log(`boredom: ${morty.boredom}`)

	}
	const timePasses = setInterval(timePassing, 1000)
})


