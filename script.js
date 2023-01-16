const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: video.duration * 100 * 2.5, // For a 10 second video, this will give a duration of 2500
  triggerElement: intro,
  triggerHook: 0
})
  //.addIndicators()  // Shows start and end of scene when scrolling
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = gsap.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: video.duration * 100 * 3 * 5, // For a 10 second video, this will give a duration of 3000
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.3;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos * 4 - delay) * accelamount;
  //console.log(scrollpos, delay);

  video.currentTime = delay;
}, 40);
//console.log(video);



// Dynamically update scroll length, based on video duration
// Wait for video duration to change from NaN to actual duration
    // https://stackoverflow.com/questions/27550529/how-to-check-length-duration-of-an-uploaded-video-in-javascript
video.ondurationchange = function() {
  //alert(this.duration);
  
  // Update scroll length by changing its duration
  scene.duration(video.duration * 100 * 2.5);

  // Update text display duration as well
  scene2.duration(video.duration * 100 * 3);

  // Optional TODO: Limit scroll length if video duration is too long

  // Refresh scenes
    // http://scrollmagic.io/docs/ScrollMagic.Scene.html#update
  scene.update(true);
  scene2.update(true);
  
  // Just to check duration has been successfully updated
  console.log("NEW VIDEO DURATION");
  console.log(video.duration);
};

// Change display text
document.querySelector('input[name="display_text"]').addEventListener('keyup', function() {
  document.getElementById('video_text').innerHTML = this.value;
});

// Change video source
document.getElementById("bojji").addEventListener("click", vidsource_Bojji);
function vidsource_Bojji() {
  document.getElementById("video").setAttribute('src', 'static/bojji.mp4');
};

document.getElementById("bojji_long").addEventListener("click", vidsource_long);
function vidsource_long() {
  document.getElementById("video").setAttribute('src', 'static/sandcastle.mp4');
};

document.getElementById("corgi").addEventListener("click", vidsource_Corgi);
function vidsource_Corgi() {
  document.getElementById("video").setAttribute('src', 'static/corgi.mp4');
};

// Display uploaded video as source
document.getElementById("upload-video-file").addEventListener("change", function() {
  const video_file = this.files[0];
  const media = URL.createObjectURL(video_file);
  var video = document.getElementById("video");
  // console.log("OLD VIDEO DURATION");
  // console.log(video.duration);
  video.src = media;
});