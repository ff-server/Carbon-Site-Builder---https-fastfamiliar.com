---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: standard-page
---

<h1 style="margin:40px 0px 0px 0px">@fastfamiliar</h1>
<p style="margin:0px 0px 40px 0px"><a href="https://twitter.com/fastfamiliar">Twitter</a>, <a href="https://facebook.com/fastfamiliar">Facebook</a>, <a href="https://instagram.com/fastfamiliarstudio">Instagram</a></p>

<ul id="links-list">
{% for link in page.links %}
    <li><a href="{{link.item.link}}" target="_blank">{{link.item.title}}</a></li>
{% endfor %}
</ul>


{{content}}