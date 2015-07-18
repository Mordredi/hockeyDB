$(document).on('ready', function(){
  $('.btn-edit').on('click', function(e){
    e.preventDefault();
    var row = $('.row-edit');
    var name = $("#name").val();
    var team = $("#team").val();
    var points = $("#points").val();
    var goals = $("#goals").val();
    var assists = $("#assists").val();
    var plus = $("#plus").val();
    row.children('.name').text(name);
    row.children('.team').text(team);
    row.children('.points').text(points);
    row.children('.goals').text(goals);
    row.children('.assists').text(assists);
    row.children('.plus').text(plus);
    row.removeClass('row-edit');
    $('.player-modal').removeClass('show');
    $('.overlay').remove();
    $('#player-form').trigger("reset");
  });
});