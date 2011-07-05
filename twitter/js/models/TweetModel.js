// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

var TweetModel = function() {

};

TweetModel.prototype.postTweet = function(user, body) {
    var tweet = new Tweet(user, body);
    localStorage.setObject(tweet.id, tweet);
}