

	class Tomagatchi {
		constructor(name, age, hunger, sleep, bordom){
			this.name = name;
			this.age = 5;
			this.hunger = 7;
			this.sleep = 4;
			this.boredom = 5;
		}
		feed(){
			if (this.hunger > 1){
				this.hunger--;
			}
		}
		sleep(){
			if(this.sleep > 1){
				this.sleep--;
			}
		}
		inspire(){
			if(this.boredom > 1){
				this.boredom--;
			}
		}

		setName(){
			console.log(`Your Tomagatchi's name is: ${this.name}`);
		}
	}

	let tG = new Tomagatchi();
	//set name function
	//****prompt user for name (in HTML--see 6/26 lesson)--then tG.name = user input....
	tG.name = ("Benedict Cumberbatch");
	tG.setName(tG.name);


	let seconds = 0;
	$('.start-game').click(function(){
	
		const timePassing = () => {
		console.log(`SECONDS: ${seconds}`);
		seconds++; //ryan's code--I had a hard time with the interval

			if(seconds % 10 == 0){
				tG.hunger++;

			}if(seconds % 2 == 0){
				tG.sleep++;

			}if(seconds % 5 == 0){
				tG.boredom++;

			}if(seconds % 60 == 0){
				tG.age++;

			}if(Math.floor(Math.random() * 10) > 4) {
				tG.feed();

			}if(tG.hunger >= 10 || tG.sleep >= 10 || tG.boredom >= 10){
				console.log(`${tG.name} is dead. You should re-evaluate your decision to be a pet owner.`);
				clearInterval(timePasses);
				}
			
			console.log(`HUNGER: ${tG.hunger}`);
			console.log(`SLEEP: ${tG.sleep}`);
			console.log(`BOREDOM: ${tG.boredom}`);
			console.log(`AGE: ${tG.age}`);

			// const $btn1 = $('#btn1');
			// $btn1.on('click', (feed) => {
			// 	console.log('FEED button clicked');
			// })

			// const $btn2 = $('#btn2');
			// $btn2.on('click', (sleep) => {
			// 	console.log('LIGHTS OFF button clicked');
			// })

			// const $btn3 = $('#btn3');
			// $btn3.on('click', (inspire) => {
			// 	console.log('PLAY button clicked');
			// })
			}
			const timePasses = setInterval(timePassing, 1000);		
	})

