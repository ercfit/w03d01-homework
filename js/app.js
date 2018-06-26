
console.log("allez...");

	class Tomagatchi {
		constructor(name, age, hunger, sleep, bordom){
			this.name = name;
			this.age = 0;
			this.hunger = 0;
			this.sleep = 0;
			this.bordom = 0;
		
			hungry(){
				if(this.hunger > 1){
					this.hunger--;
				}
				console.log("I'm hungry!");
			}

			tired(){
				if(this.sleep > 1){
					this.sleep--;
				}
				console.log("I'm sleepy!");
			}

			bored(){
				if(this.bordom > 1){
					this.bordom--;
				}
				console.log("I'm bored...");
			}

			upperRoom(){
				if(this.hunger < 1 || this.tired < 1 || this.bordom < 1){
					console.log(`${this.name} is dead. You should re-evaluate your decision to be a pet owner.`);
				}
			}
		}

	}


			const testTg = new Tomagatchi();
			console.log(testTg);
			console.log(typeof(testTg));
			testTg.hunger(2);
			testTg.sleep(9);
			testTg.bordom(1);
			testTg.age(7);
			testTg.name("Benedict Cumberbatch");


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

			timePasses = setIntv(timePassing, 3000);
			clearIntv(timePasses);
	

