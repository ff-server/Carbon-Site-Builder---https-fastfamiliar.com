---
layout: page
#feature-title: "..."
#feature-subtitle: ""
#feature-call-to-action: "..."
#feature-call-to-action-link: "..."
#feature-image: "" # this is a large, blurred backing image
image: "https://fastfamiliar.b-cdn.net/site_images/first_day_image.jpg"
image_description: "Promotional material for First Day: the image shows seven young people in green school uniforms, in front of a large school building in pink. A blue monster leaps up in the front of the image."
image_credit: "Marco Drago & Guy J Sanders"

#seo - this is just for google and socials
title: "First Day"
description: "First Day is an interactive graphic novel game for young people who are preparing to go to secondary school, co-created with Year 6 students. Players help Aleks on her first day at Parton Academy, when - as if there wasn’t already enough to think about - she discovers a shapeshifting creature in her bag…"
categories: ["audio adventure", "puzzle game", "interactive story", "immersive story", "escape room", "Year 6", "First Day", "primary school", "secondary school", "transition to secondary school", "education", "edtech"]
tags: ["audio adventure", "puzzle game", "interactive story", "immersive story", "escape room", "Year 6", "First Day", "primary school", "secondary school", "transition to secondary school", "education", "edtech"]
# image:
#   path: /img/twitter.png
#   alt: Twitter Logo

# is this published yet?
published: true
---

# First Day

_It’s the first day of secondary school._

_As if there wasn’t already enough to think about, Aleks has discovered a strange creature in her bag. It eats electronics, hates the sound of the school bell and shapeshifts whenever Aleks tries to tell a teacher about it. Aleks will need to navigate the school, find (sometimes unlikely) allies among the staff and students, and generally think on her feet to cope with whatever this strange creature throws at her._

_But with a little help from her new friends -and you the players- Aleks is determined to make it through her first day!_ 

First Day is a light-hearted and playful game about transitioning to secondary school. It combines graphic novel-style illustration, audio drama, story ‘choice points’ and puzzles. Players make choices about what Aleks should do and solve puzzles to help her… puzzles which involve them practicing skills they will need, like reading timetables, prioritising actions and navigating a new space. 

The relatable characters, humour and fact that Aleks' problems revolve around a Pokemon-esque shapeshifter with a nervous disposition keep the experience fun and engaging - but through playing, participants are able to explore their own feelings about transitioning to a new school. During the game, they explore strategies for handling the anxiety and excitement that accompany being in a new environment. 

---

### Documentation film
{% youtube "https://www.youtube.com/watch?v=E30kJyxyg7g&t=21s" %}

---

### Credits
First Day was co-created with the Year 6 pupils at [Katesgrove Primary School](https://www.katesgroveprimaryschool.co.uk/) in Reading. All the good ideas are theirs. It is supported using public funding by Arts Council England.

**First Day will be available from September 2023. Please [get in touch](https://fastfamiliar.com/contact-us/) if you want us to let you know when it has general release.**

---

### Cast and creative team

WRITTEN BY Delme Thomas, Rachel Briscoe & 2022/23 Year 6 at Katesgrove Primary School \| INTERFACE DESIGN by Joe McAlister and Mirko Febbo \| ILLUSTRATOR Marco Drago \| SOUND DESIGNER Helen Skiera \| ARTISTIC ASSOCIATE Dan Barnard \| COMMS DESIGN Guy J Sanders \| CAST: ALEKS Baylee Frank \| MEI Alice Valeriano \| NIKHIL Yajur Jayendhar \| HANNAH Lyla Attwooll \| TAYA Ariella Adu-Kingsley \| AMARI Mark Mwangi \| CLEMMIE Rose Skiera \| MADAME PERCIVAL Rachel Donovan \| MISS BROOMFIELD Endy McKay \| COACH RYAN/ MR FISHER Delme Thomas \|
WITH THANKS TO Martyna Adamska, Sherine Ahmed, Adam Elliott & John Luther
{: class="credit"}

---

### FAQs

*What is First Day?*
First Day is a light-hearted and playful game about transitioning to secondary school. It combines graphic novel-style illustration, audio drama, story ‘choice points’ and puzzles. Players make choices about what Aleks should do and solve puzzles to help her… puzzles which involve them practicing skills they will need, like reading timetables, prioritising actions and navigating a new space.

*Who is it for?*
First Day is for anyone who likes a good story - but was designed for and with young people who are preparing to transition from Primary to Secondary School.

*So Fast Familiar created the game with young people?*
That’s right - with Year 6 pupils (2022-2023) at Katesgrove Primary School in Reading. All the good ideas are theirs.

*How long does First Day normally take?*
It depends on how quickly you make choices and solve puzzles, but probably between 60 and 90 minutes.

*How can I play?*
You can:
- Play with people in the same physical space as you (e.g. a classroom), with all of you around the same computer/ looking at the same board.
- Play with people in the same physical space as you, each of you with your own device (but remember to turn down the sound on all but one of the devices!)
- Play remotely with people who are in different places – you’ll all need to be playing at the same time, and you need a WhatsApp group or to have a Zoom running (other video call providers also available).

*What do I need to play First Day?*
A computer or tablet device and internet access. You will need to use Chrome as your web browser while on a computer (free to download online), or Safari if you are on a tablet.

*How many people can play at once?*
Your link will work for up to 6 devices – we recommend teams of 2-5 but you can play in a smaller group, or a larger group if multiple people gather around the same device, or on your own if you want.

*Do I have to be really good with technology to play?*
Absolutely not - First Day will ask you to use various skills but no tech whizzkid credentials.

*Do I have to play First Day at a certain time?*
No, whenever works for you.

*Does First Day have a time limit?*
No, take all the time you need.

*Do I need to use my link immediately?*
No, you can login just before you play. If you have any problems, let us know - help@fastfamiliar.com

---
<div id="buy_options"></div>

<script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"></script>
<script src="https://js.stripe.com/v3/"></script>
<script src="https://unpkg.com/spacetime"></script>
<script type="text/javascript">
	function parse_query_string(query) {
		var vars = query.split("&");
		var query_string = {};
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			var key = decodeURIComponent(pair[0]);
			var value = decodeURIComponent(pair[1]);
			// If first entry with this name
			if (typeof query_string[key] === "undefined") {
				query_string[key] = decodeURIComponent(value);
				// If second entry with this name
			} else if (typeof query_string[key] === "string") {
				var arr = [query_string[key], decodeURIComponent(value)];
				query_string[key] = arr;
				// If third or later entry with this name
			} else {
				query_string[key].push(decodeURIComponent(value));
			}
		}
		return query_string;
	}
	var query = window.location.search.substring(1);
	var qs = parse_query_string(query);

	// only add the show elements if it is time
	let d = spacetime.now('Europe/London');
	
    // add store
	//addStore();
	
	function addStore() {
		// this means it's okay
		console.log("Should add store");
		
		// this is the basic text that explains everything
		let store_html = `
		<hr>
		<h2>Buy tickets</h2>
		<p></p>
		`;
		
		// some styling
		store_html += `
		<style>
			button {
				background-color:rgba(0,0,0,.1);
				color:black;
				border: 1px solid rgba(0,0,0,.1);
				font-size: 100%;
				border-radius: 10px;	
				padding:10px 15px;
				box-shadow:0px 0px 30px rgba(0,0,0,.2);
				transition: 0.3s;
				margin:10px 10px 0px 0px;
			}
			
			button:hover {
				background-color:#03eccc;
				color:black;
				box-shadow:0px 0px 40px rgba(0,0,0,.3);
				cursor:pointer;
			}
		</style>
		`;
		
		let db = "";
        if (qs.debug) {
            db = `<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_JzOqcrvZOvkkoe" coupon="COMP">Loading...</button>`;
        }

		let disc = "";
		if (qs.code==="TENPOUNDS") {
			disc = `<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_JzOqcrvZOvkkoe" coupon="10POUNDS">Loading...</button>`;
		}else {
			disc = `<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_JzOqcrvZOvkkoe" coupon="3_50">Loading...</button>`;
		}
		
		store_html += `
        <div id="button_container" style="width: 90%;max-width: 700px;margin-left: auto;margin-right: auto;">
			${disc}
			<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_JzOqcrvZOvkkoe" coupon="8_00">Loading...</button>
            ${db}
        </div>
        `;
		
		// update the html
		let buy_buttons = document.getElementById("buy_options");
		buy_buttons.innerHTML = store_html;
		console.log("Added store");	
	}


	var currency_symbols = {
		'USD': '$', // US Dollar
		'EUR': '€', // Euro
		'CRC': '₡', // Costa Rican Colón
		'GBP': '£', // British Pound Sterling
		'ILS': '₪', // Israeli New Sheqel
		'INR': '₹', // Indian Rupee
		'JPY': '¥', // Japanese Yen
		'KRW': '₩', // South Korean Won
		'NGN': '₦', // Nigerian Naira
		'PHP': '₱', // Philippine Peso
		'PLN': 'zł', // Polish Zloty
		'PYG': '₲', // Paraguayan Guarani
		'THB': '฿', // Thai Baht
		'UAH': '₴', // Ukrainian Hryvnia
		'VND': '₫', // Vietnamese Dong
	};

    // Create an instance of the Stripe object with your publishable API key
    var stripe = Stripe("pk_live_rnY3Wyi1uJr75orwRrcLYQ1P00SgcOmfkX");
    var checkoutButton = document.getElementById("checkout-button");

	// get any prices that we might need
	let checkout_buttons = document.getElementsByClassName("checkout_btn");
	for (let button of checkout_buttons) {
		// get the price code and value for this button
		let id = button.getAttribute("prodId");
		let coupon = button.getAttribute("coupon");

		// fetch the price info for a specific product and coupon		
		fetch(`https://tickets.fastfamiliar.com/couponToPrice/${id}/${coupon}`, {
			method: "POST",
			mode: 'cors',
			headers: {
			  
			}
		})
		.then(res => res.json())
		.then((out) => {
		  console.log('Checkout this JSON! ', out);
		  
		  // process this result, add the text to the button, add the parameters and set the shop up essentially
		  if (out.unit_amount === 350) {
			button.innerHTML = `Purchase 1 game link for ${currency_symbols[out.currency.toUpperCase()]}${out.unit_amount/100}`;
		  }else if (out.unit_amount/100 === 10) {
			button.innerHTML = `Discounted: Purchase 1 game link for ${currency_symbols[out.currency.toUpperCase()]}${out.unit_amount/100}`;
		  }else if (out.unit_amount === 800) {
			button.innerHTML = `Purchase 6 game links for ${currency_symbols[out.currency.toUpperCase()]}${out.unit_amount/100}`;
		  }else {
			button.innerHTML = `Purchase for ${currency_symbols[out.currency.toUpperCase()]}${out.unit_amount/100}`;
		  }

		  button.setAttribute("priceid", out.id); // this is needed for the transaction
		  
		  
		  button.addEventListener("click", function () {
			fetch(`https://tickets.fastfamiliar.com/purchase/${button.getAttribute("prodid")}/${button.getAttribute("priceid")}`, {
			  method: "POST",
			  mode: 'cors',
			  headers: {
				
			  }
			})
			  .then(function (response) {
				return response.json();
			  })
			  .then(function (session) {
				return stripe.redirectToCheckout(session);
			  })
			  .then(function (result) {
				// If redirectToCheckout fails due to a browser or network
				// error, you should display the localized error message to your
				// customer using error.message.
				if (result.error) {
				  alert(result.error.message);
				}
			  })
			  .catch(function (error) {
				console.error("Error:", error);
			  });
		  });
		  
		})
		.catch(err => { throw err });
	}
	
</script>

---
