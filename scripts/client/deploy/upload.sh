#!/bin/sh

echo $LOG_PREFIX Upload app to the server
rsync -e "ssh -i $HOME/.ssh/id_rsa -o StrictHostKeyChecking=no" --archive --compress --delete $DEPLOY_SRC/* root@49.13.172.10:~/srv/html
echo $LOG_PREFIX ✓ Done
