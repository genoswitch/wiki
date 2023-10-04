#!/bin/sh

# Moves public/static to static, replaces all instances of /city-of-london-uk/static with static.igem.wiki url.

mkdir -p static/assets/v2
mv public/static static/assets/v2
find ./public -type f -exec sed -i "s/\/city-of-london-uk\/static\//https:\/\/static.igem.wiki\/teams\/4642\/wiki\/assets\/v2\//g" {} \;
