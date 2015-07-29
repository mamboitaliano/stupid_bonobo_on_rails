// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap-sprockets
//= require jquery.spritely.js


$(document).ready(function() {

  // $('.question-container').on('submit', "#delete_button", function(e){
  //   e.preventDefault();

  //   console.log("LISTENER HIT")
  //   var form = this;
  //   var path = $(this).attr('action');
  //   var data = $(this).serialize();

  //   var request = $.ajax({
  //     url: path,
  //     type: 'delete',
  //     data: data
  //   });

  //   request.done(function(){
  //     $(form).parent().parent().remove();
  //   });

  //   request.fail(function(){
  //     console.log("FAILURE");
  //   });
  // });


  // $('#add_question').on("submit", function(e){
  //   console.log("SUBMIT!")
  //   e.preventDefault();

  //   var form = this;
  //   var url = $(this).attr("action");
  //   var type = "POST";
  //   var data = $(this).serialize();

  //   var request = $.ajax({
  //     url: url,
  //     type: type,
  //     data: data
  //   });

  //   request.done(function(questionPartial){
  //     console.log(questionPartial)
  //     $($('#add_question').children()[2]).val('')
  //     $('.question-container').append(questionPartial);

  //   });
  //   request.fail(function(serverData){
  //     // console.log("FAIL: " + serverData)
  //   });

  // });

  $('body').pan({fps: 30, speed: 2, dir: 'left'});
  $('#monkey').sprite({fps: 6, no_of_frames: 5})
    .spRandom({
              top: 260,
              left: 1200,
              right: 100,
              bottom: 260,
              speed: 4000,
              pause: 3000
          })
    .isDraggable()
    .activeOnClick()
    .active();
});
