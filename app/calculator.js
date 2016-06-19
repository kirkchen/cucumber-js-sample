function calculator() {
    this.getDiscountPrice = function(totalPrice, memberLevel, couponCode) {
        if (totalPrice >= 200) {
          return totalPrice * 0.8;
        } else if (totalPrice >= 100 && totalPrice < 200) {
          return totalPrice * 0.9
        }

        return totalPrice;
    }
}

module.exports = calculator;
