$(document).ready(function(){
    var $body = $('body');
    var $tweets = $('.tweets');
    var $checker = $('.checker');
    var $tweet;
    var $userTweets = $('.tweet a');
    var $tweetUser;
    var tweet;
    
    var getTweets = function() {

      for (var i = 0; i < 3; i++) {

        tweet = streams.home.shift();
        wrapTweet();
        
      }
      
    }

    var wrapTweet = function() {

      $tweet = $('<div class="tweet"></div>');
      $tweet.html('<div class="user"><a>@' + tweet.user +'</div></a>' + '<div class="timestamp">' + tweet.created_at + '</div>' + '<div class="message">'+ tweet.message + '</div>');

      $tweet.addClass('' + tweet.user);
      $tweet.prependTo($tweets);

    };

    var index = streams.home.length - 1;
        while(index >= 0){
          tweet = streams.home[index];
          //$tweet = $('<div class="tweet"></div>');
          wrapTweet();
          //$tweet.html('<div class="user">@' + tweet.user +':</div>' + '<div class="timestamp">' + tweet.created_at + '</div>' + '<div class="message">'+ tweet.message + '</div>');
          //$tweet.appendTo($tweets);

          index -= 1;
        }
  
    $('.add').on('click', function(){

      getTweets();

    })

    /*$userTweets.on('click' function() {
      $tweetUser = $(this).closest.
      if(!$tweet.hasClass())
        $tweet.toggleClass();

    })*/


    

});