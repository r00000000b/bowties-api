var createIndex = function (bowties) {
  var html = "";

  for (var i = 0; i < bowties.length; i++) {
    html += "<li>" +
            bowties[i].material +
            " - " +
            bowties[i].pattern +
            "</li>";
  }
  html = "<ul>" + html + "</ul>";
  $('#list').append(html);
};

var getBowties = function () {
  $.ajax({
    method: 'GET',
    url: '/api/bowties'
  }).done(function(resp){
    createIndex(resp)
  })
}

$(document).ready(function(){
  getBowties()
})