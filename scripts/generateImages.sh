# !/bin/bash

# $1: path to the original image
# $2: path to the logo folder (project, skill ...)
# $3: name of the logo (project, skill ...)

projectLogoPath="../public/images/$2/"

for size in 512 256 128
do

  if [[ $size -eq 128 ]]
  then
    sizeSuffix=""
  else
    sizeSuffix="-${size}x${size}"
  fi
    convert $1 -resize "${size}x${size}" -quality 100 "${projectLogoPath}${3}-logo${sizeSuffix}.png"
    cwebp -q 100 "${projectLogoPath}${3}-logo${sizeSuffix}.png" -o "${projectLogoPath}${3}-logo${sizeSuffix}.png.webp"

done
