var createIndex = function (bowties) {
  var html = "";

  for (var i = 0; i < bowties.length; i++) {
    html += "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image waves-effect waves-block waves-light'><img src='" +
            bowties[i].image_url +
            "'></div><div class='card-content content-styling'><span class='card-title'>" +
            bowties[i].material +
            " " +
            bowties[i].pattern +
            " bowtie<i class='activator material-icons right'>mode_edit</i></span><p>" +
            bowties[i].style +
            " " +
            bowties[i].material +
            " " +
            bowties[i].pattern +
            " bowtie</p><p class='price'>$" +
            bowties[i].retail_price +
            "</p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>" +
            bowties[i].style +
            " " +
            bowties[i].material +
            " " +
            bowties[i].pattern +
            " bowtie<i class='material-icons right'>close</i></span><p>Info</p></div></div></div>";
  }
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

var createModal = function() {
  var html = "<div id='newModal' class='modal'><div class='modal-content'><h4>Create New Bowtie</h4><form class='col s12'><div class='row'><div class='input-field col s12'><input id='bowtieMaterial' type='text' class='validate'><label for='bowtieMaterial'>Material</label></div><div class='input-field col s12'><input id='bowtiePattern' type='text' class='validate'><label for='bowtiePattern'>Pattern</label></div></div><div class='row'><div class='input-field col s12'><input id='bowtieStyle' type='text' class='validate'><label for='bowtieStyle'>Style</label></div></div><div class='row'><div class='input-field col s12'><input id='bowtieUrl' type='text' class='validate'><label for='bowtieUrl'>Image Url</label></div></div><div class='row'><div class='input-field col s12'><input id='bowtieWholesale' type='number' class='validate'><label for='bowtieWholesale'>Wholesale Price</label></div></div><div class='row'><div class='input-field col s12'><input id='bowtieRetail' type='number' class='validate'><label for='bowtieRetail'>Retail Price</label></div></div></form></div><div class='modal-footer'><a id='updateBowtie' href='#!' class='modal-action modal-close waves-effect waves-green btn-flat'>Save</a><a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat modal-close'>Cancel</a></div></div>";
  $('body').append(html)
  $('#newModal').openModal();
}

$(document).ready(function(){
  getBowties();

$('#addContent').click(function() {
  createModal();
});
})