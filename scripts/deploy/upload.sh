#!/bin/sh

rsync -e "ssh -i $HOME/.ssh/id_rsa -o StrictHostKeyChecking=no" --archive --compress --delete $DEPLOY_SRC/* $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_DEST
