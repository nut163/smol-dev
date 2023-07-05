$(document).ready(function() {
    let productList = [];
    let comparisonList = [];

    chrome.runtime.sendMessage({type: "GET_PRODUCT_LIST"}, function(response) {
        productList = response.productList;
        displayProducts(productList);
    });

    chrome.runtime.sendMessage({type: "GET_COMPARISON_LIST"}, function(response) {
        comparisonList = response.comparisonList;
        displayComparisons(comparisonList);
    });

    $('#saveButton').click(function() {
        chrome.runtime.sendMessage({type: "SAVE_PRODUCT"});
    });

    $('#compareButton').click(function() {
        chrome.runtime.sendMessage({type: "COMPARE_PRODUCTS"});
    });
});

function displayProducts(productList) {
    let productContainer = $('#productContainer');
    productContainer.empty();
    productList.forEach(function(product) {
        productContainer.append(`<div>${product.name} - ${product.price}</div>`);
    });
}

function displayComparisons(comparisonList) {
    let comparisonContainer = $('#comparisonContainer');
    comparisonContainer.empty();
    comparisonList.forEach(function(comparison) {
        comparisonContainer.append(`<div>${comparison.name} - ${comparison.result}</div>`);
    });
}