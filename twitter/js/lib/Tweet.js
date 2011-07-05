// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

/**
 * Tweet value object
 * @param {string} userId User id that this tweet belongs to.
 * @param {string} body Body of the tweet.
 * @return {boolean} Returns if a successful tweet is created.
 */
var Tweet = function(userId, body){
    this.id = tart.getUId();
    this.userId = userId;
    this.time = tart.randomTime();

    if (body.length <= 140)
        this.body = body;
    else
        return false;
    return true;
}