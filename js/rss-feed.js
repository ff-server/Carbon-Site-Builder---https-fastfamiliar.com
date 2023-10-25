const RSS_URL = `https://workroom.fastfamiliar.com/rss/`;
window.onload = () => {
    fetch(RSS_URL)
        .then(response => response.text())
        .then(str => str.replace(/media:content/g, 'media')) // replace media:content with media for compatibility sake
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            // do something with the data
            console.log(data);

            const items = data.querySelectorAll("item");
            let html = ``;
            let numOfElements = 4;

            if (items.length >= numOfElements) {
                for (let i=0; i<numOfElements; i++) {
                    let el = items[i];

                    console.log(el);
                    console.log(el.querySelector("title").innerHTML);

                    // get and clean title
                    let title = el.querySelector("title").innerHTML.replace("<![CDATA[", "");
                    title = title.replace("]]>", "");

                    // get and clean description
                    let desc = el.querySelector("description").innerHTML.replace("<![CDATA[", "");
                    desc = desc.replace("]]>", "");

                    // get clear image url
                    let media = el.querySelector("media").getAttribute("url");
                    let link = el.querySelector("link").innerHTML;

                    html += `
                    <div class="rss-item">
                        <div class="hero" style="background-image:url('${media}')">
                            <h1><a href="${link}">${title}</a></h1>
                            <div class="fade"></div>
                        </div>
                        <p>${desc}.. <a href="${link}">Read more</a></p>
                    </div>`;
                }
            }

            html += ``; // close tag

            // now add it to the portion
            document.getElementById("rss-feed").innerHTML = html; // add it
        });
}