"use strict";


exports.seed = function(knex, Promise) {
    return knex('snacks')
        .del()
        .then(function() {
            return knex('snacks')
                .insert([{
                    id: 1,
                    name: 'twinkies',
                    image_url: 'http://media.treehugger.com/assets/images/2012/12/twinkies.jpeg',
                    review_description: 'Twinkies are the best snack ever',
                    rating: 7.5
                }]);
        });
};
