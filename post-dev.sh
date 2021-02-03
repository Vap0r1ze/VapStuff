#!/bin/sh
SCRIPTS=/home/vap0r1ze/Documents/eeeee-mc/scripts

# rm -rf ./dist
# npm run compile
rm -rf $SCRIPTS/VapStuff
cp -r dist/VapStuff $SCRIPTS/VapStuff
cp dist/main.js $SCRIPTS/main.js
screen -S mctest -p 0 -X stuff "jsrl^M"
