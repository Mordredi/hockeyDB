$(document).on('ready', function(){
  $('.btn-open').on('click', function(e){
    e.preventDefault();
    var self = $(this);
    var modal = self.data('modal');
    $('.' + modal).addClass('show');
  })
})