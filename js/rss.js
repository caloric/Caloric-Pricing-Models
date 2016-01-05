$(function(){
    url = "http://blogs.usda.gov/category/food-and-nutrition/feed/rss/";
    $.ajax({
    type: "GET",
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    error: function(){
        console.alert('nutrition rss feed not loaded');
    },
    success: function(xml){
        values = xml.responseData.feed.entries;
        console.info("rss values", xml.responseData.feed.entries);
        console.info(values[0].title);
        console.info(values[0].contentSnippet);
        $(".rss-feed").append("<span>" + values[0].title + " --- " + values[0].contentSnippet + " --- " + values[1].title + " --- "+ values[1].contentSnippet + " --- " + values[2].title + " --- " + values[2].title + " --- " + values[3].title + " --- " + values[3].contentSnippet + " --- " + values[4].title + " --- "+ values[4].contentSnippet + " --- " + values[5].title + " --- " + values[5].title + "</span>");
      }
  });
});
