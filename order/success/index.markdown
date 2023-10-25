---
layout: page

# feature-title: "About us:"
# feature-subtitle: "The people & ideas behind Fast Familiar"
# feature-call-to-action: "Find out more about how we think"
# feature-call-to-action-link: "https://workroom.fastfamiliar.com"
# feature-image: "/assets/images/about-us/us.jpg"
---


# Loading...
{: class="main_header"}
We're just retrieving your order; this will only take a moment.
{: class="main_subtitle"}


<script>
	var query = window.location.search.substring(1);
	var qs = parse_query_string(query);
	
	// get details from transaction
	fetch(`https://tickets.fastfamiliar.com/orderDetails/${qs.session_id}`, {
		method: "POST"
	})
	.then(response => response.json())
	.then(data => {
		if (data.success) {
			// we have the info, add it in...
			let h1 = document.getElementsByClassName("main_header")[0];
			let p = document.getElementsByClassName("main_subtitle")[0];
			
			// double check what the page is, if it's BA special we need them to fill out a form
			if (data.payload.show_description.toLowerCase() == "bad altitude" && data.payload.ticket_nickname.toUpperCase() == "SPECIAL_SHOW") {
				// this is the special group - we need them to now complete a google form.
				h1.innerHTML = "One last step...";
				p.innerHTML = `
				Thank you, we have received your payment. Next, please complete this form so that we can match you with other players.
				<br /><br />
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc5iZ53KfvntNFkcoCN4Q1rc02NAX9HmExqoNYLpMOmn_SRxw/viewform?embedded=true" width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
				`;
				
			}else {
				// this is the general response
				h1.innerHTML = "Order summary";
				p.innerHTML = `Thank you for purchasing ${data.payload.show_description}.<br /><br />We have sent instructions on how to activate your purchase to ${data.payload.email_address}. It may take a few minutes to arrive. If you cannot find an email from no-reply@fastfamiliar.com please check your spam folder.<br /><br />If you have any questions, please contact help@fastfamiliar.com.`;
			}
		}else {
			// there was an error getting the info
			let h1 = document.getElementsByClassName("main_header")[0];
			let p = document.getElementsByClassName("main_subtitle")[0];
			h1.innerHTML = "An error occured.";
			p.innerHTML = "Apologies, an internal error occurred, and we were unable to retrieve your order details. If you have any issues, please contact help@fastfamiliar.com";
		}
	});
	
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
</script>