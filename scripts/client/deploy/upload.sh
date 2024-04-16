#!/bin/sh

echo $LOG_PREFIX Upload app to the server
rsync -e "ssh -i $HOME/.ssh/id_rsa -o StrictHostKeyChecking=no" --archive --compress --delete $DEPLOY_SRC/* $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_DEST
echo $LOG_PREFIX ✓ Done
