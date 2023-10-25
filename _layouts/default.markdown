<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- title -->
        {% if page.title %}
            <title>{{page.title}} | Fast Familiar</title>
        {% else %}
            <title>{{site.title}} | {{site.tagline}}</title>
        {% endif %}

        <!-- stylesheet -->
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/css/styles.css">
    
        <!-- mailchimp -->
        <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9c06802b27ed2ef8115618191/f2fb1191a7c7cdcd718a6bc8e.js");</script>
        
        <!-- favicons -->



        <!-- seo -->
        {% seo title=false %}

        <!-- analytics -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MC6ZF2Q');</script>

    </head>

    <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC6ZF2Q"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
        {{ content }}
    </body>
</html>
