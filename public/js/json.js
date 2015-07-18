$(document).on('ready', function(){
  $('.btn-json').on('click', function(e){
    var rows = $('tr');
    var json = { "players":[]};
    for (var i = 1; i < rows.length; i++) {
      var row = $(rows[i]);
      json["players"].push({"name": row.children('.name').text(), "team": row.children('.team').text(), "points": row.children('.points').text(), "goals": row.children('.goals').text(), "assists": row.children('.assists').text(), "plus": row.children('.plus').text()})
    }
    console.log(JSON.stringify(json));
  });
});