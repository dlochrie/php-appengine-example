#!/usr/bin/env bash
# Provides a wrapper for generating a closure dependencies file. This is used
# for development, or when the code is not compiled.

bower_components/closure-library/closure/bin/build/depswriter.py  \
     --root_with_prefix="client/src/app ../../app" \
     --root_with_prefix="client/template-cache ../../template-cache" \
     > public/javascripts/deps.js