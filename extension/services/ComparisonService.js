class ComparisonService {
    constructor() {
        this.productList = [];
    }

    setProductList(productList) {
        this.productList = productList;
    }

    compareProducts() {
        if (this.productList.length < 2) {
            return null;
        }

        let cheapestProduct = this.productList[0];
        let highestQualityProduct = this.productList[0];

        for (let i = 1; i < this.productList.length; i++) {
            if (this.productList[i].price < cheapestProduct.price) {
                cheapestProduct = this.productList[i];
            }

            if (this.productList[i].quality > highestQualityProduct.quality) {
                highestQualityProduct = this.productList[i];
            }
        }

        return {
            cheapest: cheapestProduct,
            highestQuality: highestQualityProduct
        };
    }
}

module.exports = ComparisonService;