$(function () {

  let click = 0;

  $('#collapsible-btn').click(function(){

    click++;

    if(click % 2 === 0) {
      $('#collapsible-menu').css('display', 'none');
      $('#collapsible-menu').css('top', '-300px');
      $('#collapsible-menu').css('left', '-300px');
      
    } else {
      $('#collapsible-menu').css('display', 'block');
      $('#collapsible-menu').css('top', '-50px');
      $('#collapsible-menu').css('left', '-70px');

    }

  })
});


const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

/ select our play button
const playButton = document.querySelector('button');

playButton.addEventListener('click', function() {

    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }

}, false);

audioElement.addEventListener('ended', () => {
  playButton.dataset.playing = 'false';
}, false);
