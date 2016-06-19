function calculator() {
    this.getDiscountPrice = function(totalPrice, memberLevel, couponCode) {
        var finalPrice = totalPrice;

        if (totalPrice >= 200) {
            finalPrice = totalPrice * 0.8;
        } else if (totalPrice >= 100 && totalPrice < 200) {
            finalPrice = totalPrice * 0.9
        }

        if (memberLevel === 'VIP') {
            finalPrice = finalPrice - 20;
        } else if (memberLevel === 'Normal') {
            finalPrice = finalPrice - 10;
        }    

        return finalPrice;
    }
}

module.exports = calculator;
