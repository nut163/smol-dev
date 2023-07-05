const Product = require('../models/Product.js');

let productList = [];

const AmazonService = {
    saveProduct: function(productData) {
        let product = new Product(productData);
        productList.push(product);
        return product;
    },

    getProductList: function() {
        return productList;
    }
};

module.exports = AmazonService;