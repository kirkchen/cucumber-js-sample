var PostService = require('../app/postService');
var should = require('chai').should();
var sinon = require('sinon');

var postService = new PostService();

module.exports = function() {
    this.Before(function() {
        this.deferred = $.Deferred();

        this.deferred.resolve({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        });

        sinon.stub($, "ajax")
            .returns(this.deferred.promise());
    });

    this.After(function() {
        $.ajax.restore();
    });

    this.Given(/^提供 post 序號 "([^"]*)"$/, function(id) {
        this.id = id;
    });

    this.When(/^使用序號取得 post 資料$/, function() {
        this.result = postService.getProduct(this.id);
    });

    this.Then(/^取得的 post 資料應該為$/, function(result, callback) {
        this.result.then(function(data) {
            data.should.deep.equal(JSON.parse(result));
            callback();
        })
    });
};
