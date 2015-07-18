$(document).on('ready', function(){
  $(document).on('click', '.btn-delete', function(e){
    e.preventDefault();
    var row = $(this).parent().parent();
    $('.player-modal').removeClass('show');
    $.ajax({
      url: 'index.html',
      method: 'DELETE',
    }).done(function(){
      row.remove();
    })
  })
});