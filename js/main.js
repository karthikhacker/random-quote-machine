$(document).ready(function(){
  function getData(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/.',
      jsonp: 'jsonp',
      dataType:'jsonp',
      data: {
        method: 'getQuote',
        format:'jsonp',
        lang:'en'
      },
      success: function(res){
        var quote = res.quoteText;
        var author = res.quoteAuthor;
        $("#quote").text(quote);
        if(author){
          $("#author").text("said by - " + author);
        }else{
          $("#author").text("Unknown");
        }
      }
    })
  }
  //change quote on button click
  $("#btn").on("click", function(){
    getData();
  });

  //share quote
  $("#shareQuote").on("click", function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
  });
});
