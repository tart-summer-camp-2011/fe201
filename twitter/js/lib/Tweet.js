// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

var Tweet = function(user, body){
    this.id = tart.getUId();
    this.user = user;
    this.body = body;
    this.time = tart.randomTime();
}