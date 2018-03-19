'use strict';
  var AddressFD = require('../../sampleData/v1/Address.json');
  var AddressData = AddressFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getAddress = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(AddressData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, AddressData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putAddress = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AddressData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postAddress = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AddressData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchAddress = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AddressData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteAddress = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(AddressData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


