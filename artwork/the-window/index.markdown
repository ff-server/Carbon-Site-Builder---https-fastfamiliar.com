---
layout: page
#feature-title: "..."
#feature-subtitle: "..."
#feature-call-to-action: "..."
#feature-call-to-action-link: "..."
#feature-image: "" # this is a large, blurred backing image
image: "/assets/images/pages/artwork/the-window/hero.jpg" # this is the image for an article
image_description: "Promotional material for The Window, featuring a hand, reaching out of a window downwards. In a painted style."
image_credit: "Guy J Sanders"

#seo - this is just for google and socials
title: "The Window"
description: "The Window is an immersive audio experience blending story, music and spatial sound. Spanning three generations and 40 years, it asks what we inherit from the past and what control we have over the future."
categories: ["immersive audio", "binaural", "alzheimers", "Alzheimer's Research UK", "ARUK", "dementia", "audio drama"]
tags: ["immersive audio", "binaural", "alzheimers", "Alzheimer's Research UK", "ARUK", "dementia", "audio drama"]
# image:
#   path: /img/twitter.png
#   alt: Twitter Logo

# is this published yet?
published: true

# redirect
redirect_from:
  - /the-window
---

# The Window

_If you knew what might happen in the future, what would that change? And what would you give for that knowledge?_

_Kathryn wants to do the right thing for her mother. But Mary can’t tell her what that is anymore and anyway, avoiding difficult conversations is a family tradition._

_Tom wants to do the right thing for his mum. But Kathryn won’t tell him what that is and anyway, avoiding difficult conversations is a family tradition._

_Something has to change. Before it’s too late._

The Window is an immersive audio experience blending story, music and spatial sound. Love and grief; memory and science. In the darkness, you find yourself at the heart of a story about the things families don’t talk about. Spanning three generations and 40 years, it asks what we inherit from the past and what control we have over the future. 

---

The Window is the recipient of one of Alzheimer’s Research UK’s inaugural Inspire Awards and a collaboration with Dr Sarah-Naomi James from the MRC Unit for Lifelong Health and Ageing at UCL.
The development of The Window was supported by ARC, Stockton.

---

## Trailer
{% youtube "https://www.youtube.com/watch?v=pl8KWOY_zXo" %}

---

### Critical coverage

> “a beautiful piece of audio narrative that gave me space to gently explore something more than half of us experience but don’t discuss”
> -- <cite>[No Proscenium](https://noproscenium.com/a-view-into-the-verboten-with-the-window-review-c57a1ef5247d)</cite>

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
	
	// if it's before the embargo date just stop
	if (d.isAfter(spacetime('March 11, 2021 0:00:01', 'Europe/London')) || qs.debug) {
		//addStore();
	}
	
	function addStore() {
		// this means it's okay
		console.log("Should add store");
		
		// this is the basic text that explains everything
		let store_html = `
		<hr>
		<h2>Buy tickets</h2>
		<p>The audio track for The Window will be available to ticket-holders for a limited period of time. The track itself is 45 minutes long but we will make it available for a longer period than this, so you can listen at the most convenient moment for you within that period.</p>
		<p><i>Tickets for each 'performance' can be bought until 1 hour before the start time.</i></p>
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
				background-color:#f66295;
				color:white;
				box-shadow:0px 0px 40px rgba(0,0,0,.3);
				cursor:pointer;
			}
		</style>
		`;
		
		// first show - 31st March - disappears April 1st
		if (d.isBefore(spacetime('April 1, 2021 0:00:01', 'Europe/London')) || qs.debug) {
			store_html += `
			<br />
			<h3>Weds 31 March</h3>
			<ul>
				<li>track available Weds 31 March 17.00 - 19.30 BST</li>
				<li>optional Zoom panel with experts: Weds 31 March 19.30 - 20.30 BST</li>
			</ul>
			`;
			
			// is it available to buy? If so we add tickets buttons
			if (d.isBetween(spacetime('March 11, 2021 0:00:01', 'Europe/London'), spacetime('March 31, 2021 16:00:00', 'Europe/London')) || qs.debug) {
				// they are available
				let db = "";
				if (qs.debug) {
					db = `<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="31_MARCH_DEBUG">Loading...</button>`;
				}
				
				store_html += `
				<p>Pay what you can:</p>
				<div id="button_container" style="width: 90%;max-width: 700px;margin-left: auto;margin-right: auto;">
					<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="31_MARCH_12">Loading...</button>
					<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="31_MARCH_8">Loading...</button>
					<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="31_MARCH_5">Loading...</button>
					${db}
				</div>
				`;
			}else {
				// not available anymore
				store_html += `
					<p><i>Sorry, tickets are no longer available</i></p>
				`;
			}
		}
		
		// second show - 10 - 11th April
		store_html += `
		<br />
		<h3>Sat 10 April 10.00 - Sun 11 April</h3>
		<ul>
			<li>track available Sat 10 April 10.00 - Sun 11 April 15.00 BST</li>
			<li>optional Zoom panel with experts: Sun 11 April 15.00 - 16.00 BST</li>
		</ul>
		`;
		
		if (d.isBetween(spacetime('March 11, 2021 0:00:01', 'Europe/London'), spacetime('April 10, 2021 9:00:00', 'Europe/London')) || qs.debug) {
			// they are available
			let db = "";
			if (qs.debug) {
				db = `<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="11_APRIL_DEBUG">Loading...</button>`;
			}
			
			store_html += `
			<p>Pay what you can:</p>
			<div id="button_container" style="width: 90%;max-width: 700px;margin-left: auto;margin-right: auto;">
				<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="11_APRIL_12">Loading...</button>
				<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="11_APRIL_8">Loading...</button>
				<button type="button" class='checkout_btn' id="checkout-button" prodId="prod_J2FKt6DlPd0LJS" coupon="11_APRIL_5">Loading...</button>
				${db}
			</div>
			`;
		}else {
			// not available anymore
			store_html += `
				<p><i>Sorry, tickets are no longer available</i></p>
			`;
		}
		
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
		  button.innerHTML = `Purchase for ${currency_symbols[out.currency.toUpperCase()]}${out.unit_amount/100}`;
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


### Cast and creative team

WRITER Rachel Briscoe \| DIRECTOR Dan Barnard \| COMPOSER & SOUND DESIGNER Richard Hammarton \| CAST Oscar Bennet, Anna Bolton, Sophie Galustian, Endy Mackay, Joan Moon, Emma Pallant, Tom Sanigar, Jamie Zubairi
{: class="credit"}
