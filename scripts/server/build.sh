#!/bin/sh

APP_NAME=backend
export LOG_PREFIX=[$APP_NAME]

export BUILD_DEST=.tmp/build/server

echo $LOG_PREFIX Build started

# sh scripts/build/common/pre-build.sh

# echo $LOG_PREFIX Copy source files
# cp -r packages/server/package.json $BUILD_DEST/
# cp -r package-lock.json $BUILD_DEST/

# cp -r packages/server/index.js $BUILD_DEST/
# cp -r packages/server/src $BUILD_DEST
# echo $LOG_PREFIX ✓ Done

# echo $LOG_PREFIX Install production dependencies
# cd $BUILD_DEST
# npm ci --production
# echo $LOG_PREFIX ✓ Done

echo $LOG_PREFIX Build finished
