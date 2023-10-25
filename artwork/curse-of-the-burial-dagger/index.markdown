---
layout: page
#feature-title: "..."
#feature-subtitle: "..."
#feature-call-to-action: "..."
#feature-call-to-action-link: "..."
#feature-image: "" # this is a large, blurred backing image
image: "/assets/images/pages/artwork/curse-of-the-burial-dagger/hero.jpg" # this is the image for an article
image_description: "An old picture of a crime scene on a neon background. To the left is a woman with wind blowing her hair to the side."
image_credit: "Andrew Ahern / Guy Sanders"

#seo - this is just for google and socials
title: "Curse of the Burial Dagger"
description: "A mansion near Dundee, 1923. Susie Sato finds herself investigating a murder when her great-uncle and host Lord Hamilton is found dead in his private museum, an ancient Egyptian burial dagger protruding from his back."
categories: ["audio adventure", "puzzle game", "interactive story", "immersive story", "escape room", "gaymer"]
tags: ["audio adventure", "puzzle game", "interactive story", "immersive story", "escape room", "gaymer"]
# image:
#   path: /img/twitter.png
#   alt: Twitter Logo

# is this published yet?
published: true


# # buy pip
# buy_pip: {
# "title":"Play online",
# "subtitle":"Buy now, enjoy anytime",
# "button_title":"Buy tickets",
# "link":"#buy_options"
# }
---

# The Curse of the Burial Dagger

_A mansion near Dundee, 1923. Susie Sato finds herself investigating a murder when her great-uncle and host Lord Hamilton is found dead in his private museum, an ancient Egyptian burial dagger protruding from his back. Could it be the curse of the dagger, an object Lord Hamilton was warned not to remove from the tomb? Or could something else have caused his death?_ 

A collaboration between the Leverhulme Research Centre for Forensic Science and the team behind _Bad Altitude_ (‘a cut above the rest and needs to be played to be believed!" ★★★★★) and _National Elf Service_ (‘An absolute stand out game in the whole play-at-home genre’ ★★★★), The Curse of the Burial Dagger is an interactive graphic novel murder mystery, suitable for players aged 10+. Help Susie uncover different types of forensic evidence, solve puzzles and weigh up contrasting hypotheses. 

Can you uncover the events leading up to Lord Hamilton’s death and deduce how he died… before the curse strikes again?

---

The Curse of the Burial Dagger is supported using public funding by Arts Council England, and funded by The Leverhulme Trust.

---

You can buy one game link (£3.50), which allows up to 6 people to play on different devices. 
Or -if you are, for example, a teacher- you can buy a bundle of 6 game links (£8.00), each of which can have 6 people playing... so that the whole class can play!

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
	addStore();
	
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

## Trailer
{% youtube "https://www.youtube.com/watch?v=Vob0hYFJPHQ" %}

---

### Critical coverage

**Winner of ‘Best Mystery Game’ at the 2021 Bullseye Awards**

> The Curse of the Burial Dagger is a fantastic experience. Unmissable if you’re a fan of murder mysteries, and something a little outside of the box if you’re more of a traditional escape room audience. Once again Fast Familiar have nailed it and their new game is perfect for all audiences.
> -- <cite>[The Escape Room-er](https://theescaperoomer.com/fast-familiar-the-curse-of-the-burial-dagger-review/), ★★★★★</cite> 

> The graphics were top notch, the narration was immersive (which truly makes it seem like you are watching a murder mystery movie rather than playing a digital game) and as always, there were humour added to the dialogues which is always a signature with this creator.
> -- <cite>[EscapetheRoom-ers](https://www.escapetheroomers.com/post/fast-familiar-the-curse-of-the-burial-dagger), (no star rating)</cite> 

> It’s no surprise to read that the artwork is excellent, and continues Fast Familiar’s flair for creating visually compelling experiences. There’s solid representation and diversity in the characters, something I noticed after playing National Elf Service. It’s great to see that it’s a core part of Fast Familiar’s storytelling.
> -- <cite>[Armchair Escapist](https://www.armchairescapist.com/curse-burial-dagger/), (no star rating)</cite> 

> Forensic science is no game – except when it comes to uncovering The Curse Of The Burial Dagger. Scientists at Dundee University’s Leverhulme Research Centre have teamed up with storytelling experts Fast Familiar to create a new video game which aims to teach players the critical thinking and evidence skills used to solve real-life mysteries.
> -- <cite>[The Courier](https://www.thecourier.co.uk/fp/entertainment/2708088/dundee-forensic-scientists-help-create-murder-mystery-video-game/), (no star rating)</cite> 

---

## FAQs

### What is The Curse of the Burial Dagger?
It’s a murder mystery in the form of an interactive graphic novel.  You’ll follow Susie as she investigates, helping her solve puzzles and weighing up contrasting hypotheses to figure out who killed Lord Hamilton. It’s also a comedy - if you’ve played any of Fast Familiar’s puzzle games, you’ll know that we like players to have a good time while exercising their grey matter.

### So it’s not an escape room?
Not in a strict sense, no - you’re not trying to escape from anywhere. There are puzzles to solve but there are also clues embedded in the story that you’ll need to look out for. It has elements of interactive fiction too.

### And Fast Familiar created the game with actual forensic scientists?
That’s right - our friends at the Leverhulme Research Centre for Forensic Science helped us come up with the story and the puzzles. So you might learn something as well as solving a murder!

### Is it family-friendly?
Absolutely. We think that players aged 10 and up will like The Curse of the Burial Dagger. As a guide, if your young person likes books like Sharna Jackson’s _High Rise Mystery_ series or Robin Stevens’ _Murder Most Unladylike_, then they’ll probably like this.

### So it’s just for young players?
Nope - because The Curse of the Burial Dagger is about solving a murder rather than just a series of puzzles, it’s a lot about the discussions your group has - which can be as ‘forensic’ as you want.
			
### How long does The Curse of the Burial Dagger normally take?
It depends on how quickly you identify your suspect, but probably between 60 and 90 minutes.

### How can I play?
You can either:
- Play with people in the same physical space as you, with all of you around the same computer. 
- Play remotely with friends/family who are in different places – you’ll all need to be playing at the same time, and you need a WhatsApp group or to have a Zoom running (other video call providers also available).

### What do I need to play The Curse of the Burial Dagger?
A computer or tablet device and internet access. You will need to use Chrome as your web browser while on a computer (free to download online), or Safari if you are on a tablet.

### How many people can play at once?
Your link will work for up to 6 devices – we recommend teams of 2-5 but you can play in a smaller group, or a larger group if multiple people gather around the same device, or on your own if your murder mystery solving skills are up to it!

### Do I have to be really good with technology to play?
Absolutely not - The Curse of the Burial Dagger will ask you to use various skills but no tech whizzkid credentials.

### What happens if I buy a ticket?
You’ll be sent an email with the link to the game. You can forward this email to the other members of your team - you will all use the same link to log in at the time you agree among yourselves.

### Do I have to play The Curse of the Burial Dagger at a certain time?
No, whenever works for you.

### Does The Curse of the Burial Dagger have a time limit?
No, take all the time you need. 

### Do I need to use my link immediately?
No, you can login just before you play. If you have any problems, let us know - help@fastfamiliar.com

---

### Cast and creative team
WRITTEN BY Dan Barnard, Delme Thomas & Rachel Briscoe | INTERFACE DESIGN by Joe McAlister, with additional support by Clemence Debaig | ILLUSTRATIONS: Andrew Ahern | SOUND DESIGN: Helen Skiera | SCIENTIFIC ADVICE: Heather Doran, Lucina Hackman, Niamh Nic Daeid & Pauline Mack
CAST: SUSIE Ami Okumura Jones | SYED Jamie Zubairi | LADY HAMILTON Rachel Donovan | STRUANA Sarah Waddell | HYWEL/ JUDGE Delme Thomas
{: class="credit"}
