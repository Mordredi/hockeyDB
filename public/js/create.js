$(document).on('ready', function(){
  $('.btn-create').on('click', function(e){
    e.preventDefault();
    var name = $("#name").val();
    var team = $("#team").val();
    var points = $("#points").val();
    var goals = $("#goals").val();
    var assists = $("#assists").val();
    var plus = $("#plus").val();
    $.ajax({
      url: 'index.html',
      method: 'POST'
      // dataType: 'json',
      // data: $('#create').serialize()
    }).done(function(data){
      $('table').append('<tr><td>' + name + '</td><td>' + team + '</td><td>' + points + '</td><td>' + goals + '</td><td>' + assists + '</td><td>' + plus + '</td><td>' + '<button class="btn btn-default btn-edit">Edit</button><button class="btn btn-default btn-delete">Delete</button></td></tr>');
      $('.create-player').removeClass('show');
      $('#create').trigger("reset");
    });
  });
});