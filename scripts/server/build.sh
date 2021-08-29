#!/bin/sh

APP_NAME=backend
export LOG_PREFIX=[$APP_NAME]

export BUILD_DEST=.tmp/build/server

echo $LOG_PREFIX Build started

sh scripts/build/common/pre-build.sh

echo $LOG_PREFIX Copy source files
cp -r server/package.json $BUILD_DEST/
cp -r server/package-lock.json $BUILD_DEST/

cp -r server/index.js $BUILD_DEST/
cp -r server/src $BUILD_DEST
echo $LOG_PREFIX ✓ Done

echo $LOG_PREFIX Install production dependencies
cd $BUILD_DEST
npm ci --production
echo $LOG_PREFIX ✓ Done

echo $LOG_PREFIX Build finished
