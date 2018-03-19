'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Address.json';



exports.getAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AddressFD = fs.readFileSync('../'+revision+samplePath);
    var AddressData = [];
    if(AddressFD) {
        AddressData = JSON.parse(AddressFD);
    }
    cb(null, AddressData);
}





exports.putAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AddressFD = fs.readFileSync('../'+revision+samplePath);
    var AddressData = [];
    if(AddressFD) {
        AddressData = JSON.parse(AddressFD);
    }
    if (Object.keys(AddressData).length > 0) {
        cb(null, AddressData[Object.keys(AddressData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AddressFD = fs.readFileSync('../'+revision+samplePath);
    var AddressData = [];
    if(AddressFD) {
        AddressData = JSON.parse(AddressFD);
    }
    if (Object.keys(AddressData).length > 0) {
        cb(null, AddressData[Object.keys(AddressData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.patchAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AddressFD = fs.readFileSync('../'+revision+samplePath);
    var AddressData = [];
    if(AddressFD) {
        AddressData = JSON.parse(AddressFD);
    }
    if (Object.keys(AddressData).length > 0) {
        cb(null, AddressData[Object.keys(AddressData)[0]]);
    }
    else {
        cb(null, {})
    }
}



exports.deleteAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AddressFD = fs.readFileSync('../'+revision+samplePath);
    var AddressData = [];
    if(AddressFD) {
        AddressData = JSON.parse(AddressFD);
    }
    if (Object.keys(AddressData).length > 0) {
        cb(null, AddressData[Object.keys(AddressData)[0]]);
    }
    else {
        cb(null, {})
    }
}


