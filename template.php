<?php

function print_header($active_page, $page_title = '', $additional_css = '')
{

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>
            <?php

            if ( $page_title !== '' ) {
                echo $page_title . ' | ';
            }

            ?>
            Ryan Hansberry
        </title>

        <link rel="shortcut icon" href="/img/favicon/favicon-alt.ico">
        <link rel="apple-touch-icon-precomposed" href="/img/favicon/touch-icon.png">

        <script type="text/javascript" src="//use.typekit.net/san3qvs.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

        <link rel="stylesheet" href="/css/normalize.min.css">
        <link rel="stylesheet" href="/css/boilerplate.css">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/blog.css">

        <?php

        echo $additional_css;

        ?>

        <!-- google web analytics -->
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-43761152-1']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>

        <!--[if lt IE 9]>
            <script src="/js/vendor/html5shiv.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">
                You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a>
                or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a>
                to improve your experience.
            </p>
        <![endif]-->

        <div id="container">
            <header>
                <a href="/">
                    <h1>Ryan Hansberry</h1>
                </a>
                <h2><span class="bracer">{</span> student <span class="amp">&amp;</span> software engineer <span class="bracer">}</span></h2>
            </header>

            <nav>
                <ul>
                    <?php

                    $nav_links = array(
                        "Home" => "/index.html",
                        "Resumé" => "/resume.html",
                        "Portfolio" => "/portfolio.html",
                        "Blog" => "/blog.html",
                    );

                    foreach ($nav_links as $name => $link) {
                        $class = '';
                        if (strcasecmp($active_page, $name) == 0) {
                            $class = 'active';
                        }
                        echo '<li><a href="' . $link . '" class="' . $class . '">' . $name . '</a></li>' . "\n";
                    }

                    ?>
                </ul>
            </nav>
<?php

}

function print_footer($additional_js = '')
{

?>
            <div id="push">
                <!--Sticky footer hackery-->
            </div>
        </div> <!--/container-->

        <footer>
            &copy; 2015, Ryan Hansberry
            <br>
            reach me at <a href="mailto:rhansby@gmail.com">rhansby@gmail.com</a>
        </footer>

        <?php

        echo $additional_js;

        ?>
    </body>
</html>
<?php

}

?>
