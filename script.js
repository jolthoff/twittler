$(document).ready(function(){
    // script variables
    var $body = $('body');
    var $tweets = $('.tweets');
    var $tweet;
    var $userTweet = $('.tweet');
    var $refresh = $('.refresh');
    var $field = $('.field');
    var tweet;
    var visitor = "me";
    var message;
    $field.hide();

    // utility function from data_generator.js
    var writeTweet = function(message){
    if(!visitor){
      throw new Error('set the global visitor property!');
    }
    var tweet = {};
    tweet.user = visitor;
    tweet.message = message;
    addTweet(tweet);
    };
    
    // grab tweet content from data_generator.js and call placeTweet()
    var getTweetContent = function() {

        tweet = streams.home.shift();
        placeTweet();
      
    }

    // provide html element tags to tweet content and place tweets to '.tweets' section
    var placeTweet = function() {

      $tweet = $('<div class="tweet"></div>');
      $tweet.html('<div class="user ' + tweet.user + '">@' + tweet.user +'</div>' + '<div class="timestamp">' + tweet.created_at + '</div>' + '<div class="message">'+ tweet.message + '</div>');

      $tweet.addClass('' + tweet.user);

      $tweet.prependTo($tweets);

    };

    // begin pageload with all tweets
    var index = streams.home.length - 1;
        while(index >= 0){
          tweet = streams.home[index];
          //$tweet = $('<div class="tweet"></div>');
          placeTweet();
          //$tweet.html('<div class="user">@' + tweet.user +':</div>' + '<div class="timestamp">' + tweet.created_at + '</div>' + '<div class="message">'+ tweet.message + '</div>');
          //$tweet.appendTo($tweets);

          index -= 1;
        }

    // provide five more tweets when skip logo is clicked
    $('.next').on('click', function(){

      for (var i = 0; i < 4; i++)
        getTweetContent();

    });

    $refresh.on('click', function() {

      location.reload();

    });

    // click on user name allows only those users tweets to remain on page
    $body.on('click', '.user', function() {

      var user = $(this).attr("class").split(' ')[1];
      console.log(user);

      $('.tweet:not(.' + user + ')').remove();

    });
  
    // write tweet option
    $('.write').on('click', function() {

      $field.show();

    });

    $('.submit').on('click', function() {

      message = $('input').val();

      writeTweet();
      tweet = streams.users[visitor].shift();
      placeTweet();

      $field.hide();

    })
    

});