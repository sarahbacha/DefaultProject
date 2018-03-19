'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var AddressImplementation = require('../implementation/AddressService.js');
    
var AddressData;

        


        module.exports.getAddress = function getAddress (req, res, next) {
        var args = req.swagger.params;
        AddressImplementation.getAddress(args, (error, data) => {
            AddressData = data;
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
        });
    };
    
                
        


    
                module.exports.putAddress = function putAddress (req, res, next) {
        var args = req.swagger.params;
        AddressImplementation.patchAddress(args, (error, data) => {
            AddressData = data;
            if (Object.keys(AddressData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postAddress = function postAddress (req, res, next) {
        var args = req.swagger.params;
        AddressImplementation.postAddress(args, (error, data) => {
            AddressData = data;
            if (Object.keys(AddressData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchAddress = function patchAddress (req, res, next) {
        var args = req.swagger.params;
        AddressImplementation.patchAddress(args, (error, data) => {
            AddressData = data;
            if (Object.keys(AddressData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteAddress = function deleteAddress (req, res, next) {
        var args = req.swagger.params;
        AddressImplementation.deleteAddress(args, (error, data) => {
            AddressData = data;
            if (Object.keys(AddressData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(AddressData[Object.keys(AddressData)[0]] || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
