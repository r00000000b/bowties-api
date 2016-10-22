$(document).ready(function(){
  var createIndex = function (bowties) {
    console.log('creating index')
    var html = "";

    for (var i = 0; i < bowties.length; i++) {
      html += "<li>" +
              bowties[i].material +
              " - " +
              bowties[i].pattern +
              "</li>";
    }
    html = "<ul>" + html + "</ul>";
    $('body').append(html);
  };

  $.get({
    console.log('ajax call')
    url: '/api/bowties',
    method: 'get',
    success: function(resp){
      createIndex(resp);
    }
  }).done(function(){
      window.location.href = '/bowties'
    })
})