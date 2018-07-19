$(document).ready(function() {

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
});
