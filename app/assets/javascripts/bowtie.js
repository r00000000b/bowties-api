var createIndex = function (bowties) {
  var html = "";

  for (var i = 0; i < bowties.length; i++) {
    html += "<div class='col s12 m6 l4'>" +
              "<div class='card medium'>" +
                "<div class='card-image waves-effect waves-block waves-light'>" +
                  "<img src='" + bowties[i].image_url + "'>" +
                "</div>" +
                "<div class='card-content content-styling'>" +
                  "<span class='card-title'>" + bowties[i].material + " " + bowties[i].pattern + " bowtie<i class='activator material-icons right'>mode_edit</i></span>" +
                  "<p>" + bowties[i].style + " " + bowties[i].material + " " + bowties[i].pattern + " bowtie</p>" +
                  "<p class='price'>$" + bowties[i].retail_price + "</p>" +
                "</div>" +
                "<div class='card-reveal'>" +
                  "<span class='card-title grey-text text-darken-4'>" + bowties[i].style + " " + bowties[i].material + " " + bowties[i].pattern + " bowtie<i class='material-icons right'>close</i></span>" +
                  "<div id='updateForm'>" +
                    "<div class='row'>" +
                      "<form class='col s12'>" +
                        "<div class='row'>" +
                          "<div class='input-field col s6'>" +
                            "<input id='bowtieMaterial' type='text' class='validate' value='" + bowties[i].material + "'><label class='active' for='bowtieMaterial'>Material</label>" +
                          "</div>" +
                          "<div class='input-field col s6'>" +
                            "<input id='bowtiePattern' type='text' class='validate' value='" + bowties[i].pattern + "'><label class='active' for='bowtiePattern'>Pattern</label>" +
                          "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                          "<div class='input-field col s12'>" +
                            "<input id='bowtieStyle' type='text' class='validate' value='" + bowties[i].style + "'><label class='active' for='bowtieStyle'>Style</label>" +
                          "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                          "<div class='input-field col s12'>" +
                            "<input id='bowtieUrl' type='text' class='validate' value='" + bowties[i].image_url + "'><label class='active' for='bowtieUrl'>Image Url</label>" +
                          "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                          "<div class='input-field col s12'>" +
                            "<input id='bowtieWholesale' type='number' class='validate'><label class='active' for='bowtieWholesale'>Wholesale Price</label>" +
                          "</div>" +
                          "<div class='input-field col s12'>" +
                            "<input id='bowtieRetail' type='number' class='validate'><label class='active' for='bowtieRetail'>Retail Price</label>" +
                          "</div>" +
                        "</div>" +
                      "</form>" +
                    "</div>" +
                    "<div class='row'>" +
                      "<a id='updateBowtie' data-id='" + bowties[i].id + "' href='#!' class='waves-effect waves-green btn-flat'>Save</a>" +
                      "<a id='deleteBowtie' data-id='" + bowties[i].id + "' href='#!' class='waves-effect waves-green btn-flat modal-close'>Delete</a>" +
                    "</div>" +
                  "</div>" +
                "</div>" +
              "</div>" +
            "</div>"
  };
  $('#content').append(html);
};

var updateEntry = function(event){
  var bowId = event.currentTarget.dataset.id;
  var bowtieParams = {
    id: bowId,
    material: $('#bowtieMaterial').val(),
    pattern: $('#bowtiePattern').val(),
    style: $('#bowtieStyle').val(),
    image_url: $('#bowtieUrl').val(),
    wholesale_price: $('#bowtieWholesale').val(),
    retail_price: $('#bowtieRetail').val()
  }
  $.ajax({
    method: 'PATCH',
    url: '/api/bowties/' + bowId,
    data: bowtieParams,
    dataType: 'json'
  }).done(function(){
    // getBowties();
    window.location.href = '/bowties'
  })
}

var deleteEntry = function(event) {
  var bowId = event.currentTarget.dataset.id;
  $.ajax({
    method: 'DELETE',
    url: '/api/bowties/' + bowId,
  }).done(function(){
    window.location.href = '/bowties'
  })
}

// var editBowtieEntryEventListener = function() {
//   $('#updateBowtie').click(function(event) {
//     var bowId = event.currentTarget.dataset.id;
//     var bowtieParams = {
//       id: bowId,
//       material: $('#bowtieMaterial').val(),
//       pattern: $('#bowtiePattern').val(),
//       style: $('#bowtieStyle').val(),
//       image_url: $('#bowtieUrl').val(),
//       wholesale_price: $('#bowtieWholesale').val(),
//       retail_price: $('#bowtieRetail').val()
//     }
//     $.ajax({
//       method: 'PATCH',
//       url: '/api/bowties/' + bowId,
//       data: bowtieParams,
//       dataType: 'json'
//     }).done(function(){
//       // getBowties();
//       window.location.href = '/bowties'
//     })
//   })

//   $('#deleteBowtie').click(function(event){
//     var bowId = event.currentTarget.dataset.id;
//     $.ajax({
//       method: 'DESTROY',
//       url: '/api/bowties/' + bowId,
//     }).done(function(){
//       window.location.href = '/bowties'
//     })
//   })
// }

var getBowties = function () {
  $.ajax({
    method: 'GET',
    url: '/api/bowties'
  }).done(function(resp){
    createIndex(resp)
  })
}

var createModal = function() {
  $('#newModal').remove();
  var html = "<div id='newModal' class='modal'>" +
                "<div class='modal-content'>" +
                  "<h4>Create New Bowtie</h4>" +
                    "<form class='col s12'>" +
                      "<div class='row'>" +
                        "<div class='input-field col s12'>" +
                          "<input id='bowtieMaterial' type='text' class='validate'>" +
                          "<label for='bowtieMaterial'>Material</label>" +
                        "</div>" +
                      "</div>" +
                      "<div class='row'>" +
                        "<div class='input-field col s12'>" +
                          "<input id='bowtiePattern' type='text' class='validate'>" +
                          "<label for='bowtiePattern'>Pattern</label>" +
                        "</div>" +
                      "</div>" +
                      "<div class='row'>" +
                        "<div class='input-field col s12'>" +
                          "<input id='bowtieStyle' type='text' class='validate'>" +
                          "<label for='bowtieStyle'>Style</label>" +
                        "</div>" +
                      "</div>" +
                      "<div class='row'>" +
                        "<div class='input-field col s12'>" +
                          "<input id='bowtieUrl' type='text' class='validate'>" +
                          "<label for='bowtieUrl'>Image Url</label>" +
                        "</div>" +
                      "</div>" +
                      "<div class='row'>" +
                        "<div class='input-field col s12'>" +
                          "<input id='bowtieWholesale' type='number' class='validate'>" +
                          "<label for='bowtieWholesale'>Wholesale Price</label>" +
                        "</div>" +
                      "</div>" +
                      "<div class='row'>" +
                        "<div class='input-field col s12'>" +
                          "<input id='bowtieRetail' type='number' class='validate'>" +
                          "<label for='bowtieRetail'>Retail Price</label>" +
                        "</div>" +
                      "</div>" +
                    "</form>" +
                  "</div>" +
                  "<div class='modal-footer'>" +
                    "<a id='enterBowtie' href='#!' class='modal-action modal-close waves-effect waves-green btn-flat'>Save</a>" +
                    "<a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat modal-close'>Cancel</a>" +
                  "</div>" +
                "</div>";
  $('body').append(html)
  $('#newModal').openModal();
  addBowtieEntryEventListener();
}

var addBowtieEntryEventListener = function() {
  $('#enterBowtie').click(function() {
    var bowtieParams = {
      material: $('#bowtieMaterial').val(),
      pattern: $('#bowtiePattern').val(),
      style: $('#bowtieStyle').val(),
      image_url: $('#bowtieUrl').val(),
      wholesale_price: $('#bowtieWholesale').val(),
      retail_price: $('#bowtieRetail').val()
    }
    $.ajax({
      method: 'POST',
      url: '/api/bowties',
      data: bowtieParams,
      dataType: 'json'
    }).done(function(){
      // createIndex();
      window.location.href = '/bowties'
    })
  })
}

$(document).ready(function(){
  getBowties();

$('#addContent').click(function() {
  createModal();
});

$('#updateBowtie').click(function(event) {
  updateEntry(event);
})

$('#deleteBowtie').click(function(event) {
  deleteEntry(event);
})

})