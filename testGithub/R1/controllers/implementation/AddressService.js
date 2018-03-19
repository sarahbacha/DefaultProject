'use strict';
/*
* This file will not be changed by the generator
*/
var AddressData = {};
var AddressFD = require('../../sampleData/v1/Address.json');
AddressData = AddressFD;



exports.getAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    cb(null, AddressData);
}





exports.putAddress = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
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
    if (Object.keys(AddressData).length > 0) {
        cb(null, AddressData[Object.keys(AddressData)[0]]);
    }
    else {
        cb(null, {})
    }
}


