'use strict';
  var BlaaFD = require('../../sampleData/v1/Blaa.json');
  var BlaaData = BlaaFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getBlaa = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(BlaaData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, BlaaData).then(function(result) {
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





exports.putBlaa = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(BlaaData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postBlaa = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(BlaaData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchBlaa = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(BlaaData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteBlaa = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(BlaaData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


