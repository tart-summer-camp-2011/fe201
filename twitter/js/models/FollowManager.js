// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

var FollowManager = function() {

};

FollowManager.prototype.createFollow = function(follower, following) {
    var follow = new Follow(follower.id, following.id);
    localStorage.setObject(follow.id, follow);
}