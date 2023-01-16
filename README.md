# Scroll Magic

This demo uses the Scroll Magic library to place a video in the background, allowing you to play the video by scrolling down the webpage. 

### Why?
- Allows for slow-mo playback
- Can pause at an exact moment
- Play the video in reverse by scrolling backwards

This can be extended to recreate webpages like [Apple's AirPods animation](https://www.apple.com/airpods-3rd-generation/). 

Inspiration from https://codepen.io/henrikmark/pen/NWPVOoM.

### My uploaded video is so laggy. Why?
This works best if your video is encoded a certain way. You can process your video to make it smoother by using ffmpeg.
- ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
- ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4