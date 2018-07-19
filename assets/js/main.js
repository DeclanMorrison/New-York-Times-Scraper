<<<<<<< HEAD


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
=======
var ApiKey =  "74b0b534002f477ead1026e1b98f1377";
var querUrl = "http://developer.nytimes.com/article_search_v2.json" + ApiKey;





$.ajax({
    url: querUrl,
    method:"GET"
}).then(function(response){
    
})
>>>>>>> bb0afb7ae724c26d658de960554d41951cbedb26
