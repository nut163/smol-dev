1. Exported Variables:
   - `productList`: An array of product objects, shared between `popup.js`, `background.js`, `content.js`, and `AmazonService.js`.
   - `comparisonList`: An array of comparison objects, shared between `popup.js`, `background.js`, `content.js`, and `ComparisonService.js`.

2. Data Schemas:
   - `Product`: A schema for product data, used in `Product.js`, `AmazonService.js`, `ComparisonService.js`, `popup.js`, `background.js`, and `content.js`.
   - `Comparison`: A schema for comparison data, used in `Comparison.js`, `ComparisonService.js`, `popup.js`, `background.js`, and `content.js`.

3. ID Names of DOM Elements:
   - `productContainer`: A container for product elements in `popup.html`, manipulated in `popup.js`.
   - `comparisonContainer`: A container for comparison elements in `popup.html`, manipulated in `popup.js`.
   - `saveButton`: A button in `popup.html`, event handled in `popup.js`.
   - `compareButton`: A button in `popup.html`, event handled in `popup.js`.

4. Message Names:
   - `SAVE_PRODUCT`: A message sent from `content.js` to `background.js` to save a product.
   - `COMPARE_PRODUCTS`: A message sent from `popup.js` to `background.js` to compare products.

5. Function Names:
   - `saveProduct()`: A function in `AmazonService.js` and `StorageService.js`, called in `background.js` and `content.js`.
   - `compareProducts()`: A function in `ComparisonService.js`, called in `background.js` and `popup.js`.
   - `getProductList()`: A function in `StorageService.js`, called in `popup.js`.
   - `getComparisonList()`: A function in `StorageService.js`, called in `popup.js`.

6. Shared Libraries:
   - `jquery.min.js`: Used in `popup.html` and `popup.js` for DOM manipulation.
   - `bootstrap.min.css`: Used in `popup.html` for styling.
   - `bootstrap.min.js`: Used in `popup.html` for Bootstrap components.