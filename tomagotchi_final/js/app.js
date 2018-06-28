class Tomagatchi {
		constructor(name, age, hunger, sleep, bordom){
			this.name = name;
			this.age = 5;
			this.hunger = 7;
			this.sleep = 4;
			this.boredom = 5;
		}
		eat(){
			if (this.hunger > 1){
				this.hunger--;
			}
		}
		sleep(){
			if(this.sleep > 1){
				this.sleep--;
			}
		}
		slay(){
			if(this.boredom > 1){
				this.boredom--;
			}
		}
	}

	let tG = new Tomagatchi();

	const $btn1 = $('#btn1');
	$btn1.on('click', (eat) => {
		tG.eat();
	})

	const $btn2 = $('#btn2');
	$btn2.on('click', (sleep) => {
		tG.sleep();
	})

	const $btn3 = $('#btn3');
	$btn3.on('click', (slay) => {
		tG.slay();
	})


// function moveRight() {
//     $('.container').animate({left: "+=50"}, 2000, function() {
//         moveLeft();
//     });
// }

// function moveLeft(){
//     $('.container').animate({left: "-=50"}, 2000, function () {
//         setTimeout(moveRight, 50);
//     });
// }

// setTimeout(moveRight, 50);
$('#submit-btn').on('click', () => {

	const name = $('#input-box').val();
	let $h3 = ('<h3/>')
	$('.span2').append($h3).text("Your Tomagatchi's name is: " + name);
})


let seconds = 0;

$('.start-game').on('click', (e) => {
	e.preventDefault();

	let $h2 = ('<h2/>')
	let user = prompt("Please enter your name:", "Benedict Cumberbatch");
	if (user == null || user == "") {
 		let txt = "User cancelled the prompt.";
	}else {
 		txt = user +"'s Tomagatchi";
		}

   	$('.span1').append($h2).text(txt);

  

	const timePassing = () => {
	console.log(`SECONDS: ${seconds}`);
	seconds++;
	$('.seconds').text(seconds);

	if(seconds % 10 == 0){
		tG.hunger++;

	}if(seconds % 2 == 0){
		tG.sleep++;

	}if(seconds % 5 == 0){
		tG.boredom++;

	}if(seconds % 5 == 0){
		tG.age++;

	}if(Math.floor(Math.random() * 10) > 4) {
		tG.eat();

	}if(tG.hunger >= 10 || tG.sleep >= 10 || tG.boredom >= 10){
		let $h4 = ('<h4/>')
		$('.span3').append($h4).text("Your Tomagatchi is dead. You should re-evaluate your decision to be a pet owner.");
	


		clearInterval(timePasses);
}
			
		$('.hunger').text(`${tG.hunger}`);
			
		$('.sleep').text(`${tG.sleep}`);
			
		$('.boredom').text(`${tG.boredom}`);
			
		$('.age').text(`${tG.age}`);
	

	// tg.moveRight();
	// tg.moveLeft();
}
	const timePasses = setInterval(timePassing, 1000);
})