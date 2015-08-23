<!DOCTYPE html>
<html lang="en" ng-app="photogallery">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Photo Gallery</title>

    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link href="/css/application.css" rel="stylesheet">
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top top-nav">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" ng-init="navCollapsed=true"
              ng-click="navCollapsed=!navCollapsed">
            <span class="sr-only navigation"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse">
            <a class="navbar-brand" ui-sref="home">Home</a>
            <ul class="nav navbar-nav">
              <li><a class="pull-left" ui-sref="about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <div ui-view></div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.min.js"></script>
    <script src="/closure/base.js"></script>
    <script src="/js/deps.js"></script>
    <script>goog.require('photogallery.app');</script>
  </body>
</html>