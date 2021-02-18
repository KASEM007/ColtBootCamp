const tweetForm = document.querySelector('#tweetForm')

tweetForm.addEventListener('submit', function(e){
    console.log("SUBMIT!!")
    e.preventDefault();

    const username = tweetForm.nextElementSibling.username.value;
    const tweet = tweetForm.element.tweet.value;
    addTweet(username, tweet)
});

const addTweet = (username, tweet) =>{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}