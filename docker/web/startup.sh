#!/usr/bin/env bash
if  [ ! -d "/data/project/node_modules" ] || [ ! "$(ls -A /data/project/node_modules)" ] ; then
    rm -rf /data/project/node_modules/**
    cd /data/project
    npm install
fi
tsc -w &
nodemon start --config /data/project/docker/nodemon.conf.json /data/project/index.js
