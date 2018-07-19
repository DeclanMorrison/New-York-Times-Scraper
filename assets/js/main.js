$(document).ready(function() {

<<<<<<< HEAD
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
=======
    $("#search-btn").on("click", function() {
        console.log("Got here!");

        var searchTerm;
        var apiKey = "74b0b534002f477ead1026e1b98f1377";

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        searchTerm = $("#search-text").val();

        url += ('?' + $.param({
            'api-key': apiKey,
            'q': searchTerm
        }));

        console.log(url);

        $.ajax({
            url: url,
            method: 'GET',
        }).then(function(response){
            console.log(response);
        });

    });
>>>>>>> 8a1098aac32ad2863f64e6b1b89e5f8d2245d026
});
