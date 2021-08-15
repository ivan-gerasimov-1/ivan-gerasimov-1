#!/bin/sh

rsync -e "ssh -i $HOME/.ssh/id_rsa -o StrictHostKeyChecking=no" --archive --compress --delete .tmp/deploy/ root@8156138.gq:/srv/gerasimov.pw
