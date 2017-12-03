/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';

var helper = function(){

    var validation = function(callback){
        return callback(null);
    };

    return {
        validation: validation
    };
};

module.exports = helper;