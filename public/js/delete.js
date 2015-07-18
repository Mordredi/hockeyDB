$(document).on('ready', function(){
  $(document).on('click', '.btn-delete', function(e){
    e.preventDefault();
    var row = $(this).parent().parent();
    $('.player-modal').removeClass('show');
    row.remove();
  });
});