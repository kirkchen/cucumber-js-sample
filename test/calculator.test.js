var Calculator = require('../app/calculator');
var should = require('chai').should();

var calculator = new Calculator();

describe('Calculator', function() {
    describe('#GetDiscountPrice(totalPrice)', function() {
        describe('if total price over 200, get 80% discount', function() {
            it('should return 200 if total price is 250', function() {
                var result = calculator.getDiscountPrice(250);

                result.should.equal(200);
            });
        });

        describe('if total price over 100 and less than 200, get 90% discount', function() {
            it('should return 135 if total price is 150', function() {
                var result = calculator.getDiscountPrice(150);

                result.should.equal(135);
            });
        });

        describe('if total price less than 100, no discount', function() {
            it('should return 80 if total price is 80', function() {
                var result = calculator.getDiscountPrice(80);

                result.should.equal(80);
            });
        });

        describe('if member\'s level is VIP, get 20 discount', function() {
            it('should return 70 if total price is 90 and member\'s level is VIP', function() {
                var result = calculator.getDiscountPrice(90, 'VIP');

                result.should.equal(70);
            });
        });

        describe('if member\'s level is NORMAL, get 20 discount', function() {
            it('should return 80 if total price is 90 and member\'s level is NORMAL', function() {
                var result = calculator.getDiscountPrice(90, 'Normal');

                result.should.equal(80);
            });
        });

        describe('if member has coupon code, get coupon discount', function() {
            it('should return 80 if total price is 90 and member has coupon code', function() {
                var result = calculator.getDiscountPrice(90, null, 'bbb');

                result.should.equal(80);
            });
        });
    });
});
