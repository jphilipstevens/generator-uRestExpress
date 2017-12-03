/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';

const main = function(){

    var getAll = function(req,res){
        res.status(200).json({});
    };

    var getById = function(req,res){
        res.status(200).json({});
    };

    var createNew = function(req,res){
        res.status(200).json({});
    };

    var updateOne = function(req,res){
        res.status(200).json({});
    };

    var deleteOne = function(req,res){
        res.status(200).json({});
    };

    return {
        getAll:getAll,
        getById: getById,
        createNew: createNew,
        updateOne: updateOne,
        deleteOne: deleteOne
    };
};

module.exports = main;