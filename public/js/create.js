$(document).on('ready', function(){
  $('.btn-create').on('click', function(e){
    e.preventDefault();
    var name = $("#name").val();
    var team = $("#team").val();
    var points = $("#points").val();
    var goals = $("#goals").val();
    var assists = $("#assists").val();
    var plus = $("#plus").val();
    $('table').append('<tr><td class="name">' + name + '</td><td class="team">' + team + '</td><td class="points">' + points + '</td><td class="goals">' + goals + '</td><td class="assists">' + assists + '</td><td class="plus">' + plus + '</td><td>' + '<button data-modal="edit" class="btn btn-info btn-open">Edit</button><button class="btn btn-danger btn-delete">Delete</button></td></tr>');
    $('.overlay').remove();
    $('.player-modal').removeClass('show');
    $('#player-form').trigger("reset");
  });
});