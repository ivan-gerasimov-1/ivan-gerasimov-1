#!/bin/sh

rm -rf .tmp/deploy
mkdir -p .tmp/deploy

cp -r dist/ .tmp/deploy
cp -r src/public/ .tmp/deploy
