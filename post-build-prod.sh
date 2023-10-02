#!/bin/sh

# Keep icons/ in both app/public and app/assets

# Move non-html files (assets) to app/assets
# Src: https://documentation.platformos.com/use-cases/using-gatsby-with-platformos
rsync -a -m --include '*/' --exclude '*.html' --exclude "*.xml" --exclude "*.webmanifest" public app
#rsync -a -v app/public/assets/ app/public && rm -rf app/public/assets && \
mkdir -p app/assets_temp app/assets/v1/public/city-of-london-uk
mv -f app/public app/assets_temp

mv app/assets_temp/public/* app/assets/v1/public/city-of-london-uk/

# Move html files (content) to app/public
# Src: https://documentation.platformos.com/use-cases/using-gatsby-with-platformos
rsync -a -m --include '*/' --include '*.html' --include "icons/*" --include "*.xml" --include "*.webmanifest" --exclude '*' public/ app/public