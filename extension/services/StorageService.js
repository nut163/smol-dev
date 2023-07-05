const productList = [];
const comparisonList = [];

function saveProduct(product) {
    productList.push(product);
    chrome.storage.local.set({ productList: productList });
}

function getProductList() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['productList'], function(result) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result.productList || []);
            }
        });
    });
}

function getComparisonList() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['comparisonList'], function(result) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result.comparisonList || []);
            }
        });
    });
}

module.exports = {
    saveProduct,
    getProductList,
    getComparisonList
};