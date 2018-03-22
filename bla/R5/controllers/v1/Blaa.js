'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var BlaaImplementation = require('../../../implementation/BlaaService.js');
    
var BlaaData;

        


        module.exports.getBlaa = function getBlaa (req, res, next) {
        var args = req.swagger.params;
        BlaaImplementation.getBlaa(args, (error, data) => {
            BlaaData = data;
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
        });
    };
    
                
        


    
                module.exports.putBlaa = function putBlaa (req, res, next) {
        var args = req.swagger.params;
        BlaaImplementation.patchBlaa(args, (error, data) => {
            BlaaData = data;
            if (Object.keys(BlaaData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postBlaa = function postBlaa (req, res, next) {
        var args = req.swagger.params;
        BlaaImplementation.postBlaa(args, (error, data) => {
            BlaaData = data;
            if (Object.keys(BlaaData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchBlaa = function patchBlaa (req, res, next) {
        var args = req.swagger.params;
        BlaaImplementation.patchBlaa(args, (error, data) => {
            BlaaData = data;
            if (Object.keys(BlaaData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteBlaa = function deleteBlaa (req, res, next) {
        var args = req.swagger.params;
        BlaaImplementation.deleteBlaa(args, (error, data) => {
            BlaaData = data;
            if (Object.keys(BlaaData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(BlaaData[Object.keys(BlaaData)[0]] || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
