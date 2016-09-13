console.log('sourced');
$(function(){
  console.log('in doc ready');
  var objectToSend={
    request:'from client'
  };
  $('#postButton').on('click', function(){
    console.log('in onclick');
    $.ajax({
      type:'POST',
      url:'/poster',
      data:objectToSend,
      success: function (data) {
        console.log('this came back from server', data);

      }//success
    });//ajax
  });//onclick
})//docready
