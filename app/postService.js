function postService() {
    var root = 'http://jsonplaceholder.typicode.com';

    this.getProduct = function(id) {      
        return $.ajax({
            url: root + '/posts/' + id,
            method: 'GET'
        });
    }
}

module.exports = postService;
