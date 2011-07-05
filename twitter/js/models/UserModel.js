// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

var UserModel = function() {

};

UserModel.prototype.createUser = function(username, password, email) {
    var user = new User(username, password, email);
    localStorage.setObject(user.id, user);
}