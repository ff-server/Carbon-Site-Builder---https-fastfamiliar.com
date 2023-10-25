---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

{{content}}

<!-- here we create a grid of the artworks -->
<div class="grid-wrapper">
    {% for i in (0..page.highlighted-artwork-titles.size) %}
        {% if i < page.highlighted-artwork-titles.size %}
            <div class="tile {{page.highlighted-artwork-grid[i]}}">
                <a href="{{page.highlighted-artwork-links[i]}}">
                    {% if page.highlighted-artwork-heros[i] != "placeholder" %}
                        <div class="tile-image" style="background-image:url('{{page.highlighted-artwork-heros[i]}}')"></div>
                    {% else %}
                        <div class="tile-image placeholder" style="">
                            <div class="coming-soon">
                                <div id="logo"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.32 303.93"> <defs> </defs> <title>Fast Familiar</title> <path class="logo-color" d="M397.32,174.2c-21.05,12.72-41.76,25.25-62.58,37.85l-72.35-29.29-52.68,31.55,72.65,29.38L227,277.17l-72.82-29.42-45.7,27.45V228.33l45-27.09v-23.8l102.65-60.63Z" style="fill: rgb(255, 255, 255);"></path> <path class="logo-color" d="M57.38,83.35V303.93L0,280.91V59.1L98.13,0l58,23.85Z" style="fill: rgb(255, 255, 255);"></path> <path class="logo-color" d="M108,168.94V124.39l46.12,17.94Z" style="fill: rgb(255, 255, 255);"></path></svg></div>
                            </div>
                        </div>
                    {% endif %}
                </a>
                <h3><a href="{{page.highlighted-artwork-links[i]}}">{{page.highlighted-artwork-titles[i]}}</a></h3>
                <p>{{page.highlighted-artwork-description[i]}}</p>
                <p class="awards">{{page.highlighted-artwork-awards[i]}}</p>
            </div>
        {% endif %}
    {% endfor %}
</div>