app.factory('eleveFactory', function($resource){
    return $resource('http://localhost:3000/api/liste/:userId', {userId: '@id'
}, {
    update: {
        method: 'PUT'
    }
});

})