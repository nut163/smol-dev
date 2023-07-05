chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "SAVE_PRODUCT") {
        let product = getProductDetails();
        chrome.runtime.sendMessage({message: "SAVE_PRODUCT", product: product}, function(response) {});
    }
});

function getProductDetails() {
    let product = new Product();
    product.title = document.getElementById('productTitle').innerText;
    product.price = document.getElementById('priceblock_ourprice').innerText;
    product.rating = document.getElementById('acrPopover').getAttribute('title');
    product.url = window.location.href;
    return product;
}