#!/bin/sh

APP_NAME=client
export LOG_PREFIX=[$APP_NAME]

export SCRIPTS_DIR=scripts/client

export DEPLOY_SRC=.tmp/build/client
# TODO | Use "/client" sub-dir
# export DEPLOY_DEST=$DEPLOY_DEST/client

echo $LOG_PREFIX Deploy started

sh $SCRIPTS_DIR/deploy/upload.sh

echo $LOG_PREFIX Deploy finished
