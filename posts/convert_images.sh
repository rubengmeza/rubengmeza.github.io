#!/bin/bash

# Set the directory where your images are located
IMAGE_DIR="images"

# Loop through all the files in the directory
for img in "$IMAGE_DIR"/*; do
  # Check if the file is an image and not already a .jpg
  if [[ ! "$img" =~ \.jpg$ ]] && [[ -f "$img" ]]; then
    # Get the file name without extension
    filename=$(basename -- "$img")
    extension="${filename##*.}"
    name="${filename%.*}"
    
    # Convert to .jpg using ImageMagick (convert command)
    echo "Converting $img to $IMAGE_DIR/$name.jpg"
    magick "$img" "$IMAGE_DIR/$name.jpg"
    
    # Check if the conversion was successful and delete the original file
    if [[ -f "$IMAGE_DIR/$name.jpg" ]]; then
      echo "Deleting original file: $img"
      rm "$img"
    else
      echo "Error: Conversion failed for $img"
    fi
  fi
done

echo "Conversion and cleanup completed."

