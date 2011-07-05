// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

var User = function(username, password, email) {
    this.id = tart.getUId();
    this.username = username;
    this.password = password;
    this.email = email;

    this.tweets = [];
    this.profile;
}