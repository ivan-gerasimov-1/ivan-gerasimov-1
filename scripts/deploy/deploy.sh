#!/bin/sh

export DEPLOY_SRC=.tmp/deploy

sh scripts/deploy/pre-upload.sh
sh scripts/deploy/upload.sh
