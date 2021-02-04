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