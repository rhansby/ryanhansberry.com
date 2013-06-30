<?php

function print_header($page_title)
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
			<title>
				<?php
				if (isset($page_title)) {
					echo $page_title . ' | ';
				}
				?>
				Ryan Hansberry
			</title>
			<meta name="description" content="">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">

			<script type="text/javascript" src="//use.typekit.net/san3qvs.js"></script>
			<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

			<link rel="stylesheet" href="css/normalize.min.css">
			<link rel="stylesheet" href="css/boilerplate.css">
			<link rel="stylesheet" type="text/css" href="css/main.css">

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
					<h1>Ryan Hansberry</h1>
					<h2><span class="bracer">{</span> student <span class="amp">&amp;</span> web developer <span class="bracer">}</span></h2>
				</header>

				<nav>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="work.html" class="active">Work</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="about.html">About</a></li>
					</ul>
				</nav>


	<?php
}

function print_footer()
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

			<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
			<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

			<script src="js/plugins.js"></script>
			<script src="js/main.js"></script>
		</body>
	</html>
	<?php
}

?>
