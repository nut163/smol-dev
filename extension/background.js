chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "SAVE_PRODUCT") {
        AmazonService.saveProduct(request.product)
            .then(() => {
                productList.push(request.product);
                sendResponse({status: "Product saved successfully"});
            })
            .catch(error => {
                sendResponse({status: "Failed to save product", error: error});
            });
    } else if (request.message === "COMPARE_PRODUCTS") {
        ComparisonService.compareProducts(productList)
            .then(comparisonList => {
                sendResponse({status: "Products compared successfully", comparisonList: comparisonList});
            })
            .catch(error => {
                sendResponse({status: "Failed to compare products", error: error});
            });
    }
    return true;
});