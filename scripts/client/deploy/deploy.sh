#!/bin/sh

export DEPLOY_SRC=.tmp/deploy
export SCRIPTS_DIR=scripts/client

sh $SCRIPTS_DIR/deploy/pre-upload.sh
sh $SCRIPTS_DIR/deploy/upload.sh
