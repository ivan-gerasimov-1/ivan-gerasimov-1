#!/bin/sh

APP_NAME=client
export LOG_PREFIX=[$APP_NAME]

export BUILD_DEST=.tmp/build/client

# Start
echo $LOG_PREFIX Build started

# Pre-build step
sh scripts/build/common/pre-build.sh

# Build client
echo $LOG_PREFIX Build client
npx parcel build packages/client/src/index.html --out-dir $BUILD_DEST --no-cache --no-source-maps
echo $LOG_PREFIX ✓ Done

# Copy assets
echo $LOG_PREFIX Copy assets to \"$BUILD_DEST\" dir
cp -r packages/client/src/public/ $BUILD_DEST
echo $LOG_PREFIX ✓ Done

# Finish
echo $LOG_PREFIX Build finished
