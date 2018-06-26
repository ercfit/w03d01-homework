
console.log("allez...");

	class Tomagatchi {
		constructor(name, age, hunger, sleep, bordom){
			this.name = name;
			this.age = 0;
			this.hunger = 0;
			this.sleep = 0;
			this.bordom = 0;
		}
			hungry(){
				if(this.hunger > 1){
					this.hunger--;
				}
				console.log("I'm hungry!", this.hunger);
			}

			tired(){
				if(this.sleep > 1){
					this.sleep--;
				}
				console.log("I'm sleepy!", this.sleep);
			}

			bored(){
				if(this.bordom > 1){
					this.bordom--;
				}
				console.log("I'm bored...", this.bordom);
			}

			setName(){
				//insert option to accept input
				console.log(`Your Tomagatchi's name is ${this.name} `);
			}

			incrAge(){
				this.age++;
			}

			
			

			upperRoom(){
				if(this.hunger > 9 || this.sleep > 9 || this.bordom > 9){
					console.log(`${this.name} is dead. You should re-evaluate your decision to be a pet owner.`);
				}
			}
		

	}


			const testTg = new Tomagatchi();
			console.log(testTg);
			console.log(typeof(testTg));
			testTg.hungry(2);
			testTg.tired(11);
			testTg.bored(1);
			testTg.upperRoom();

			//prints starting age which was set in constructor
				console.log(testTg.age);

			//set name function
			//prompt user for name (in HTML--see 6/26 lesson)--then testTG.name = user input....
			testTg.name = ("Benedict Cumberbatch");
			testTg.setName(testTg.name);

			//tesing increaseAge
			testTg.incrAge(testTg.age);
				console.log(testTg.age);

			//age increases w/ time	(every 5 sec)
			var ageIntv  = setInterval(testTg.incrAge(), 5000);
				console.log(ageIntv);

			// //hunger increases w/ time	(every 5 sec)
			// var ageIntv  = setInterval(testTg.incrAge(), 5000);
			// 	console.log(ageIntv);
				
			// //sleep increases w/ time	(every 5 sec)
			// var ageIntv  = setInterval(testTg.incrAge(), 5000);
			// 	console.log(ageIntv);	

			// //boredom increases w/ time	(every 5 sec)
			// var ageIntv  = setInterval(testTg.incrAge(), 5000);
			// 	console.log(ageIntv);


			const $btn1 = $('#btn1');
			$btn1.on('click', () => {
				console.log('FEED button clicked');
			})

			const $btn2 = $('#btn2');
			$btn2.on('click', () => {
				console.log('LIGHTS OFF button clicked');
			})

			const $btn3 = $('#btn3');
			$btn3.on('click', () => {
				console.log('PLAY button clicked');
			})

		//GAME LOOP
			let seconds = 0;
			const timePassing = () => {
				console.log(`It has been ${seconds} seconds`);
				seconds++;
			}



			
			// timePasses = setInterval(timePassing, 3000);
			// clearIntv(timePasses);
	

