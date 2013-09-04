<?php

function print_header($active_page, $page_title = '', $additional_css = '')
{

?>
    <!DOCTYPE html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
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

            <link rel="shortcut icon" href="/img/favicon/favicon.ico">
            <link rel="apple-touch-icon image_src" href="/img/favicon/favicon.png">

            <script type="text/javascript" src="//use.typekit.net/san3qvs.js"></script>
            <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

            <link rel="stylesheet" href="/css/normalize.min.css">
            <link rel="stylesheet" href="/css/boilerplate.css">
            <link rel="stylesheet" href="/css/main.css">
            <link rel="stylesheet" href="/css/blog.css">

            <?php

            echo $additional_css;

            ?>

            <script src="js/vendor/modernizr-2.6.2.min.js"></script>
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
                    <h2><span class="bracer">{</span> student <span class="amp">&amp;</span> web developer <span class="bracer">}</span></h2>
                </header>

                <nav>
                    <ul>
                        <?php

                        $nav_links = array(
                            "Home" => "/index.html",
                            "Work" => "/work.html",
                            "Blog" => "/blog.html",
                            "About" => "/about.html"
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
                &copy; 2013, Ryan Hansberry
                <br>
                reach me at <a href="mailto:rhansby@gmail.com">rhansby@gmail.com</a>
            </footer>

            <!script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
            <script>window.jQuery || document.write('<script src="/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

            <script src="/js/plugins.js"></script>
            <script src="/js/main.js"></script>

            <?php

            echo $additional_js;

            ?>
        </body>
    </html>
<?php

}

?>
