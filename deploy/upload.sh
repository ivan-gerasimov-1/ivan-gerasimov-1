#!/bin/sh

cd /dist && rsync -e "ssh -i $HOME/.ssh/id_rsa -o StrictHostKeyChecking=no" --archive --compress --delete . root@8156138.gq:/srv/gerasimov.pw
cd /src/public && rsync -e "ssh -i $HOME/.ssh/id_rsa -o StrictHostKeyChecking=no" --archive --compress . root@8156138.gq:/srv/gerasimov.pw