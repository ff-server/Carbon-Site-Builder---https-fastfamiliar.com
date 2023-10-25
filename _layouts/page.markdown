---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: standard-page
---

{% if page.image != nil and page.image != "/assets/images/seo/default-image.png" and page.image != "placeholder" %}
    <img id="hero_image" alt="{{page.image_description}}" src="{{page.image}}" width="100%" height="auto" />
    <div id="hero_credit">Image credit: {{page.image_credit}}</div>
{% elsif page.image == "placeholder" %}
    <div class="placeholder-image">
        <div id="logo"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.32 303.93"> <defs> </defs> <title>Fast Familiar</title> <path class="logo-color" d="M397.32,174.2c-21.05,12.72-41.76,25.25-62.58,37.85l-72.35-29.29-52.68,31.55,72.65,29.38L227,277.17l-72.82-29.42-45.7,27.45V228.33l45-27.09v-23.8l102.65-60.63Z" style="fill: rgb(255, 255, 255);"></path> <path class="logo-color" d="M57.38,83.35V303.93L0,280.91V59.1L98.13,0l58,23.85Z" style="fill: rgb(255, 255, 255);"></path> <path class="logo-color" d="M108,168.94V124.39l46.12,17.94Z" style="fill: rgb(255, 255, 255);"></path></svg></div>
    </div>
    <div id="hero_credit">Promotional material coming soon</div>
{% else %}
    <div class="no-image-padding"></div>
{% endif %}

{% if page.buy_pip != nil %}
    <div id="buy_pip">
        <div class="module">
            <h1>{{page.buy_pip.title}}</h1>
            <p>{{page.buy_pip.subtitle}}</p>
        </div>
        <div class="module">
            <a href="{{page.buy_pip.link}}" target="_blank"><div class="button">{{page.buy_pip.button_title}}</div></a>
        </div>
    </div>
{% endif %}


{{content}}