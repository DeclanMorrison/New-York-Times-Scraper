$(document).ready(function() {

  $("#search-btn").on("click", function() {

  var searchTerm;
  var apiKey = "74b0b534002f477ead1026e1b98f1377";

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': apiKey,
    'q': searchTerm
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });

    $(document).on("click", "#search-btn", function(event) {
    searchTerm = $("#search-text").text();
    console.log(url)
    });

  });
});
