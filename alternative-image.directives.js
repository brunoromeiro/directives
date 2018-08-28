(function() {
    'use strict';
    angular
        .module('app')
        .directive('alternativeImage', function() {
            return {
                link: function(scope, element, attrs) {
                    var defaultImage = '../assets/imgs/jotinha.jpg';
                    if(!attrs.src) attrs.$set('src', defaultImage);
                    element.on('error', function() {
                        if (attrs.src !== defaultImage) {
                            attrs.$set('src', defaultImage);
                        }
                    });
                }
            };
        });
})();
