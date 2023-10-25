---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<!-- header -->
<div id="homepage_hero">
    <div id="gradient-fade-top"></div>
    <div id="logo"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.32 303.93"> <defs> </defs> <title>Fast Familiar</title> <path class="logo-color" d="M397.32,174.2c-21.05,12.72-41.76,25.25-62.58,37.85l-72.35-29.29-52.68,31.55,72.65,29.38L227,277.17l-72.82-29.42-45.7,27.45V228.33l45-27.09v-23.8l102.65-60.63Z" style="fill: rgb(255, 255, 255);"></path> <path class="logo-color" d="M57.38,83.35V303.93L0,280.91V59.1L98.13,0l58,23.85Z" style="fill: rgb(255, 255, 255);"></path> <path class="logo-color" d="M108,168.94V124.39l46.12,17.94Z" style="fill: rgb(255, 255, 255);"></path></svg></div>   
    <!-- include menubar -->
    {% include menubar.markdown %}
    <div id="gradient-fade"></div>
    <div id="backing-image" style="background-image:url('{{page.splash-background}}');"></div>
    <div id="backing-grain"></div>
    <div id="text-float-container">
        <div id="text_float">
            <div id="top-slogan">{{page.splash-subtitle}}</div>
            <div id="slogan" class="">{{page.splash-title}}</div>
            <div id="tagline">
                <p>{{page.splash-body}}</p>
            </div>
            <button class="call-to-action" onClick="location.href='/artwork/'">
                {{page.splash-call-to-action}}
            </button>
        </div>
    </div>
    <div id="sponsors">
        <div id="title">Featured in:</div>
        <img src="/Carbon-Site-Builder---https-fastfamiliar.com/assets/images/logos/combo.svg" class="desktop" width="100%" height="auto" />
        <img src="/Carbon-Site-Builder---https-fastfamiliar.com/assets/images/logos/combo-small.svg" class="mobile" width="100%" height="auto" />
    </div>
</div>

<!-- quotes section -->
<ul id="quotes-panel">
    {% assign in = 1 %}
    {% for i in (0..page.bullets.size) %}
        {% if i < page.bullets.size %}
        <li class="quote">
            {{page.bullets[i]}}
            <div class="number">
                <img src="/Carbon-Site-Builder---https-fastfamiliar.com/assets/images/homepage/{{in}}.png" width="100px" height="auto">
            </div>
        </li>
        {% endif %}
        {% assign in = in | plus:1 %}
    {% endfor %}
</ul>
<div id="bullet-end" class="standard-homepage-horizontal-padding">{{page.bullet-end}}</div>

<button class="call-to-action center" onClick="location.href='/about/'">
    {{page.bullet-call-to-action}}
</button>

<!-- talk moment -->
<div id="talk-quote">{{page.talk-quip}}</div>
<img id="talk-mini-logos" src="/Carbon-Site-Builder---https-fastfamiliar.com/assets/images/logos/second-combo.svg" width="40%" height="auto" />

<!-- mini-menu bar section -->
<!-- <table id="homepage-mini-menu">
    <tr>
        <th>Digital<br />artworks</th>
        <th>Education + Research tools</th>
        <th>Fast Familiar<br />for fun</th>
    </tr>
</table> -->

<!-- featured highlights --> 
<ul id="homepage-featured-artwork">
    {% for i in (0..page.highlighted-artwork-titles.size) %}
        {% if i < page.highlighted-artwork-titles.size %}
            <li>
                <a href="{{page.highlighted-artwork-links[i]}}">
                    <div class="text-area">
                        <img src="{{page.highlighted-artwork-title-art[i]}}"  width="100" height="auto" />
                        <h3>{{page.highlighted-artwork-titles[i]}}</h3>
                        <div class="body">{{page.highlighted-artwork-blerbs[i]}}</div>
                    </div>
                    <div class="side-fade"></div>
                    <div class="backing-image" style="background-image:url('{{page.highlighted-artwork-art[i]}}')"></div>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<!-- footer -->
{% include footer.markdown %}

{{content}}
