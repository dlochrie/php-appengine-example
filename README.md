# Overview

## What does it do?
Nothing. Nothing at all.

It's a SPA with a single `.php` file running an `Angular` application.

# Prerequisites

* You'll need to the Node Package Manager (`npm`), which should have come with `Node.js`, which means you'll need `Node.js` as well. Get `Node.js` [here](https://nodejs.org/download/) if you don't have it already.
* You'll need [bower](http://bower.io/), which means you'll need to install it with npm: `npm install bower -g`
* You'll need the Google App Engine PHP SDK, which you can find [here](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_PHP).

## Install
1. Install the `bower` dependencies: `bower install`
2. Create an `app.yaml` file by copying `app.example.yaml` to a new file called `app.yaml`. Update the `application` parameter in this file to match the application ID you have in App Engine.
3. Generate the Google Closure dependencies (you might need to do this every time you update a JS file). The command is:  `./bin/genjsdeps.sh`.

# Running Locally

## On Mac
(**Untested**).

Make sure you have the [SDK](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_PHP)
installed. The command to run the application might be:

    google_appengine/dev_appserver.py path-to-this-application/

If this does not work for you, see the Linux section down below.

## On Linux

**Note**: On Linux, if you are using more than one App Engine SDKs,
(for example, you have both the PHP and Go/Python/Java SDKs) then you need to
specify the full path `dev_appserver.py` in the PHP SDK, to make sure you do
not run the dev server for the _wrong_ SDK.

The command to run the local server looks like:

    /path/to/dev_appserver.py --php_executable_path=/path/to/php-cgi path-to-this-application/

For example:

    /usr/local/lib/php_appengine/dev_appserver.py --php_executable_path=/usr/bin/php-cgi php-appengine-example/

# Deploying

Coming Soon.