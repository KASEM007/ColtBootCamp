"use strict";

var tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function (e) {
  console.log("SUBMIT!!");
  e.preventDefault();
  var username = tweetForm.nextElementSibling.username.value;
  var tweet = tweetForm.element.tweet.value;
  addTweet(username, tweet);
});

var addTweet = function addTweet(username, tweet) {
  var newTweet = document.createElement('li');
  var bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append("- ".concat(tweet));
  tweetsContainer.append(newTweet);
};