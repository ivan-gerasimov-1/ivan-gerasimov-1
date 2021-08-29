#!/bin/sh

APP_NAME=backend
export LOG_PREFIX=[$APP_NAME]

export SCRIPTS_DIR=scripts/server

export DEPLOY_SRC=.tmp/build/server
export DEPLOY_DEST=$DEPLOY_DEST/server

echo $LOG_PREFIX Deploy started

sh $SCRIPTS_DIR/deploy/upload.sh
sh $SCRIPTS_DIR/deploy/post-deploy.sh

echo $LOG_PREFIX Deploy finished
