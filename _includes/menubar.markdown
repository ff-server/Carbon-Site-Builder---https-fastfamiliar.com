<div id="menubar_icon">
    <button class="menu" onclick="this.classList.toggle('opened');document.getElementById('menubar-slide').classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'));" aria-label="Main Menu">
      <svg width="35" height="35" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
</div>

<div id="menubar-overflow">
    <table>
        <tr>
            {% for i in (0..site.menubar-explode-items.size) %}
                {% if i < site.menubar-explode-items.size %}
                    <td>
                        <a href="{{site.menubar-explode-links[i]}}">{{site.menubar-explode-items[i]}}</a>
                    </td>
                {% endif %}
            {% endfor %}  
        </tr>
    </table>
</div>

<div id="menubar-slide"> 
    <div id="menubar-slide-mobile">
        <ul>
            {% for i in (0..site.menubar-explode-items.size) %}
                {% if i < site.menubar-explode-items.size %}
                    <li>
                        <a href="{{site.menubar-explode-links[i]}}">{{site.menubar-explode-items[i]}}</a>
                    </li>
                {% endif %}
            {% endfor %}       
        </ul>
        <br />
        <br />
    </div>
    <ul>
        {% for i in (0..site.menubar-items.size) %}
            {% if i < site.menubar-items.size %}
                <li>
                    <a href="{{site.menubar-links[i]}}">{{site.menubar-items[i]}}</a>
                </li>
            {% endif %}
        {% endfor %}       
    </ul>

    <div id="twitter_embed">
        <a class="twitter-timeline" href="https://twitter.com/FastFamiliar?ref_src=twsrc%5Etfw">Tweets by FastFamiliar</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
</div>