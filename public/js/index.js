$(document).on('ready', function(){
  $.getJSON('/index.json', function(data){
    var players = data["players"];
    for (var i = 0; i < players.length; i++) {
      $('table').append('<tr><td class="name">' + players[i]["name"] + '</td><td class="team">' + players[i]["team"] + '</td><td class="points">' + players[i]["points"] + '</td><td class="goals">' + players[i]["goals"] + '</td><td class="assists">' + players[i]["assists"] + '</td><td class="plus">' + players[i]["plus"] + '</td><td>' + '<button data-modal="edit" class="btn btn-info btn-open">Edit</button><button class="btn btn-danger btn-delete">Delete</button></td></tr>');
    }
  });
});