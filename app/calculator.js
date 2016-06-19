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

        var couponDiscount = this.getDiscountByCouponCode(couponCode);
        finalPrice = finalPrice - couponDiscount;

        return finalPrice;
    }

    this.getDiscountByCouponCode = function(code) {
        if (!code) {
            return 0;
        }

        if (code.indexOf('a') > -1) {
            return 20;
        }

        if (code.indexOf('b') > -1) {
            return 10;
        }
    }
}

module.exports = calculator;
