// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBktZ4NCUYZAya8_DLZQgc3VRVYw61sJSc",
    authDomain: "elearning-d3629.firebaseapp.com",
    projectId: "elearning-d3629",
    storageBucket: "elearning-d3629.appspot.com",
    messagingSenderId: "556466765734",
    appId: "1:556466765734:web:d1045902b19b19342b9967",
    measurementId: "G-VP0KY0CRHR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  //   Get input Values
  let link1 = document.querySelector(".link").value;
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let topic = document.querySelector(".topic").value;
  let link = parseYoutubeUrl(link1);
  let level = document.querySelector(".level").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, link1, topic, level, message);
  function parseYoutubeUrl(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
    match = url.match(regExp);
    console.log(match[7]);

  return match && match[7].length == 11 ? match[7] : false;
  
  }
  if (link != false)
  {
    saveContactInfo(name, email, link1, topic, level, message);
  }
  else
  {
    alert("Error: Invalid video id");
  }
 // saveContactInfo(name, email, link, message);

  document.querySelector(".contact-form").reset();
}
// Save infos to Firebase
function saveContactInfo(name, email, link, topic, level, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    topic: topic,
    link: link,
    level:level,
    message: message,
  });

      
          //establishes root of db
         
}

document.querySelector(".btn123").addEventListener("mood1", submit);


function submit(l){
  l.preventDefault();


  let data1 = document.querySelector(".mood1").value;

  var ref = firebase.database().ref("infos");

      ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot){
        var data = childSnapshot.val();
        console.log(data.topic);
        console.log(data.level);
        console.log(data.link);
        });
      });

}
/*
document.querySelector(".card-btn").addEventListener("submit", retrieve);

function retrieve(e) {
  e.preventDefault();
  let topic1 = document.querySelector(".btn1").value;
  console.log(topic1);
  let level1 = document.querySelector(".button").value;
  console.log(level1);

  console.log(topic,level);
  var ref = firebase.database().ref("infos");

      ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot){
        var data = childSnapshot.val();
        console.log(data.link);
        });
      });
}*/
// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle('change')
});
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}
/*
btn.addEventListener('click', () => {
  playPause()
})


video.addEventListener('timeupdate', () => {
  console.log(video.currentTime, video.duration)
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%` 
  if(video.ended) {
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  } 
})
// End of Section 2 Video
*/
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
});

