$(document).ready(function(){
  $('form').on('submit', function(){
    var item = $('form input');
    var newmessage = {item: item.val()};

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: newmessage,
      success: function(data){
        location.reload();

      }
    });

    return false;
  });



});
