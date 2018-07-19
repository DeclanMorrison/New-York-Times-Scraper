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
        }).then(function (response){
            console.log(response)
            const articles = response.response.docs;
            $.each(articles, function (index, value){

                $article = $(`<div class="card">
                                <div class="card-header">
                                    ${value.headline.main}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${value.snippet}</h5>
                                    <p class="card-text"></p>
                                    <a href="${value.web_url}" class="btn btn-primary">Go to this article</a>
                                </div>
                            </div>`);

                $("#retrieve-articles").prepend($article);
            });
        });

    });
});
