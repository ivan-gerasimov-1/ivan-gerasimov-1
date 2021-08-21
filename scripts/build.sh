#!/bin/sh

parcel build src/index.html --no-cache --no-source-maps
cp -r src/public/* dist/
