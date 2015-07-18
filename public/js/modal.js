$(document).on('ready', function(){
  $(document).on('click', '.btn-open', function(e){
    e.preventDefault();
    var self = $(this);
    var modal = self.data('modal');
    if (modal === 'create') {
      $('.form-header').text('Create Player');
      $('.btn-edit').hide();
      $('.btn-create').show();
    } else if (modal === 'edit') {
      var row = self.parent().parent();
      row.addClass('row-edit');
      $('.form-header').text('Edit Player');
      $('#name').val(row.children('.name').text());
      $('#team').val(row.children('.team').text());
      $('#points').val(row.children('.points').text());
      $('#goals').val(row.children('.goals').text());
      $('#assists').val(row.children('.assists').text());
      $('#plus').val(row.children('.plus').text());
      $('.btn-edit').show();
      $('.btn-create').hide();
    }
    $('.player-modal').addClass('show');
    $('body').append('<div class="overlay"> </div>')
  });
});

$(document).on('ready', function(){
  $(document).on('click', '.overlay', function(){
    $('.overlay').remove();
    $('.player-modal').removeClass('show');
    $('#player-form').trigger("reset");
  })
})