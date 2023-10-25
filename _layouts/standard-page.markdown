---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default

---

<!-- top header for all pages -->
{% include header.markdown %}

<!-- perhaps we have an image to show? -->
{% if page.header-image != nil %}
<div id="header-image">
    <div id="blur-bar"></div>
    <img src="{{page.header-image}}" />
</div>
{% else %}

{% endif %}

<!-- check for potential feature page -->
{% if page.feature-title != nil %}
    <div id="feature-element">
        <div id="backing-image" style="background-image:url('{{page.feature-image}}')"></div>
        <div id="feature-block">
            <div id="feature-title">{{page.feature-title}}</div>
            <div id="feature-subtitle">{{page.feature-subtitle}}</div>

            {% if page.feature-call-to-action != nil %}
            <form action="{{page.feature-call-to-action-link}}">
                <button class="call-to-action center">
                    {{page.feature-call-to-action}}
                </button>
            </form>
            {% endif %}
        </div>
    </div>
{% endif %}


<div id="page-container">
    {{content}}
</div>

<!-- footer -->
{% include footer.markdown %}