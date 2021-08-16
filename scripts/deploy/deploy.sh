#!/bin/sh

export DEPLOY_SRC=.tmp/deploy
export DEPLOY_DEST=root@8156138.gq:/srv/gerasimov.pw

sh scripts/deploy/pre-upload.sh
sh scripts/deploy/upload.sh
