$(function () {
  document.querySelector('.select-btn-white').onmousemove = function (e) {

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
  
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  }
  
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

(function () {
  let state;
  let source = {}; 
  const URL = 'https://mp3trial.s3-sa-east-1.amazonaws.com/music.mp3';
  //const URL = $('#sound-address').val();
  console.log(URL)
    
  const context = new AudioContext();
  const playButton = document.querySelector('#play');
    
  let yodelBuffer;

  window.fetch(URL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      playButton.disabled = false;
      yodelBuffer = audioBuffer;
    });
    
    playButton.onclick = () => play(yodelBuffer);

  function play(audioBuffer) {
    
    
   
   
   console.log(state)
    if (state === 'running') {
     
      context.suspend();
      state = source.context.state;
    } else if (state === 'suspended') {
      context.resume();
      state = source.context.state;
    } else { 
      source = context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(context.destination);
      source.start();
      state = source.context.state;
    }
    
    console.log(source.context)

  }
}());