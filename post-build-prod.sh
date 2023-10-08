#!/bin/sh

# Moves public/static to static, replaces all instances of /city-of-london-uk/static with static.igem.wiki url.

mkdir -p assets/v2
mv public/static/ assets/v2
find ./public -type f -exec sed -i "s/\/city-of-london-uk\/static\//https:\/\/static.igem.wiki\/teams\/4642\/wiki\/assets\/v2\/static\//g" {} \;

# Fix names of fonts
# static.igem.wiki has no underscores or capital letters.
find ./public -type f -exec sed -i "s/static\/KaTeX_AMS-Regular/static\/katex-ams-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Caligraphic-Bold/static\/katex-caligraphic-bold/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Caligraphic-Regular/static\/katex-caligraphic-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Fraktur-Bold/static\/katex-fraktur-bold/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Fraktur-Regular/static\/katex-fraktur-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Main-Bold/static\/katex-main-bold/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Main-BoldItalic/static\/katex-main-bolditalic/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Main-Italic/static\/katex-main-italic/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Main-Regular/static\/katex-main-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Math-BoldItalic/static\/katex-math-bolditalic/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Math-Italic/static\/katex-math-italic/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_SansSerif-Bold/static\/katex-sansserif-bold/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_SansSerif-Italic/static\/katex-sansserif-italic/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_SansSerif-Regular/static\/katex-sansserif-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Script-Regular/static\/katex-script-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Size1-Regular/static\/katex-size1-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Size2-Regular/static\/katex-size2-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Size4-Regular/static\/katex-size4-regular/g" {} \;
find ./public -type f -exec sed -i "s/static\/KaTeX_Typewriter-Regular/static\/katex-typewriter-regular/g" {} \;