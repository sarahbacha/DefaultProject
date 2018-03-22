'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Blaa.json';



exports.getBlaa = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var BlaaFD = fs.readFileSync('../'+revision+samplePath);
    var BlaaData = [];
    if(BlaaFD) {
        BlaaData = JSON.parse(BlaaFD);
    }
    cb(null, BlaaData);
}





exports.putBlaa = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var BlaaFD = fs.readFileSync('../'+revision+samplePath);
    var BlaaData = [];
    if(BlaaFD) {
        BlaaData = JSON.parse(BlaaFD);
    }
    if (Object.keys(BlaaData).length > 0) {
        cb(null, BlaaData[Object.keys(BlaaData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postBlaa = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var BlaaFD = fs.readFileSync('../'+revision+samplePath);
    var BlaaData = [];
    if(BlaaFD) {
        BlaaData = JSON.parse(BlaaFD);
    }
    if (Object.keys(BlaaData).length > 0) {
        cb(null, BlaaData[Object.keys(BlaaData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.patchBlaa = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var BlaaFD = fs.readFileSync('../'+revision+samplePath);
    var BlaaData = [];
    if(BlaaFD) {
        BlaaData = JSON.parse(BlaaFD);
    }
    if (Object.keys(BlaaData).length > 0) {
        cb(null, BlaaData[Object.keys(BlaaData)[0]]);
    }
    else {
        cb(null, {})
    }
}



exports.deleteBlaa = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var BlaaFD = fs.readFileSync('../'+revision+samplePath);
    var BlaaData = [];
    if(BlaaFD) {
        BlaaData = JSON.parse(BlaaFD);
    }
    if (Object.keys(BlaaData).length > 0) {
        cb(null, BlaaData[Object.keys(BlaaData)[0]]);
    }
    else {
        cb(null, {})
    }
}


