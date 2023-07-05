class Comparison {
  constructor(product1, product2) {
    this.product1 = product1;
    this.product2 = product2;
  }

  comparePrice() {
    return this.product1.price - this.product2.price;
  }

  compareQuality() {
    return this.product1.quality - this.product2.quality;
  }

  comparePreference(userPreference) {
    let score1 = 0;
    let score2 = 0;

    userPreference.forEach(preference => {
      if (this.product1.features.includes(preference)) {
        score1++;
      }
      if (this.product2.features.includes(preference)) {
        score2++;
      }
    });

    return score1 - score2;
  }
}

module.exports = Comparison;