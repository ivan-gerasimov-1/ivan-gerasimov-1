#!/bin/sh

rm -rf $DEPLOY_SRC
mkdir -p $DEPLOY_SRC

cp -r dist/* $DEPLOY_SRC
