for f in *.mov; do
    ffmpeg -i "$f" -c:v libx264 -c:a aac "${f%.mov}.mp4"
done
