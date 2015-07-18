$(document).on('ready', function(){
  $(document).on('click', '.btn-delete', function(e){
    e.preventDefault();
    var row = $(this).parent().parent();
    $.ajax({
      url: 'index.html',
      method: 'DELETE',
    }).done(function(){
      row.remove();
    })
  })
});