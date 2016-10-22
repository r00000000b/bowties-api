var createIndex = function (bowties) {
  var html = "";

  // for (var i = 0; i < bowties.length; i++) {
  //   html += "<li>" +
  //           bowties[i].material +
  //           " - " +
  //           bowties[i].pattern +
  //           "</li>";
  // }

  for (var i = 0; i < bowties.length; i++) {
    html += "<div class='col s3'><div class='card'><div class='card-image waves-effect waves-block waves-light'><img src='" +
            bowties[i].image_url +
            "'><span class='card-title'>" +
            bowties[i].material +
            " " +
            bowties[i].pattern +
            " bowtie</span></div><div class='card-content content-styling'><p>" +
            bowties[i].style +
            " " +
            bowties[i].material +
            " " +
            bowties[i].pattern +
            " bowtie</p><p class='price'>$" +
            bowties[i].retail_price +
            "</p></div><div class='card-action'><a id='edit' class='activator action-links' href='#''>Edit</a><a id='delete' class='action-links' href='#'>Delete</a></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>" +
            bowties[i].style +
            " " +
            bowties[i].material +
            " " +
            bowties[i].pattern +
            " bowtie<i class='material-icons right'>close</i></span><p>Info</p></div></div></div>";
  }

  // html = "<ul>" + html + "</ul>";
  $('#content').append(html);
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