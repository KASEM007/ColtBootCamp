"use strict";

// colt bootcamp video #262
var tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
  e.preventDefault(); //const usernameInput = document.querySelectorAll('input')[0];
  //const tweetInput = document.querySelectorAll('input')[1];

  var usernameInput = tweetForm.elements.username;
  var tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = ' ';
  tweetInput.value = '';
});

var addTweet = function addTweet(username, tweet) {
  var newTweet = document.createElement('li');
  var bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(" -  ".concat(tweet));
  tweetsContainer.append(newTweet);
};