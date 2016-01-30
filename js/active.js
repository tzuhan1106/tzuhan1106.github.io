$(document).ready(function(){ 
  var source_id = '1-Y2bzxJhDu16Nze3qCsQebW1sJTiAgAj9AxR4Ht3OoY';
  $.ajax({
      url: 'https://spreadsheets.google.com/feeds/list/' + source_id + '/1/public/values?alt=json',
      async: false,
      type: 'GET',
    })
    .done(function(data) {
      console.log("success");
      console.log(data);
      for (var i = 0 ; i < (data.feed.entry).length ; i++)
      {
        var text = data.feed.entry[i]['gsx$value']['$t'];
        var img = data.feed.entry[i]['gsx$image']['$t'];
        var photo_inner = $.parseHTML("<li><a class=\"ns-img\" href=\"" + img + "\"/></a><div class=\"caption\">"+ text +"</div></li>");
        $('#inphoto').append(photo_inner);
      }
    })
    .fail(function() {
      console.log("Home photo error");
    })
    .always(function() {
      console.log("complete");
    });

  $("#mbtn1").click(function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
    
  });
  $("#mbtn2").click(function(){
      $('html,body').animate({scrollTop:$('#selfIntroduction').offset().top},600);
    
  });
  $("#mbtn3").click(function(){
      $('html,body').animate({scrollTop:$('#timelinejs').offset().top},600);
    
  });
  $("#mbtn4").click(function(){
      $('html,body').animate({scrollTop:$('#contactMe').offset().top},600);
    
  });
  //control scroll back to top button
   $("#gotopbutton").on({
     mouseenter: function(){
       $(this).addClass('animated shake');
    },
     mouseleave: function(){
       $(this).removeClass('animated shake');
     },
     click: function(){
       $('html,body').animate({scrollTop:$('#home').offset().top},600);
     }
   }); 
  // show the modal
  $("#showmybtn").click(function(){
    $('.ui.modal')
      .modal('show');
  });

  // contact me form control
  $('.ui.form.segment')
    .form({
      on: 'blur',
      fields: {
        empty: {
          identifier  : 'yourname',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your name'
            }
          ]
        },
        email: {
          identifier  : 'youremail',
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        },
        tellempty: {
          identifier  : 'tellmewhat',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter value in You want to tell me what'
            }
          ]
        }
      }
    });
  //aniview control  
  
  var options = {
       animateThreshold: 100,
       scrollPollInterval: 20
   }
});
