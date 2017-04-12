"use strict";


exports.seed = function(knex, Promise) {
    return knex('snacks')
        .del()
        .then(function() {
            return knex('snacks')
                .insert([{
                        name: 'Twinkies',
                        image_url: 'http://media.treehugger.com/assets/images/2012/12/twinkies.jpeg',
                        review_description: 'Twinkies are the best snack ever',
                        rating: 7.5
                    },
                    {
                        name: 'Nutter Butter',
                        image_url: 'https://i5.walmartimages.com/asr/02485090-1082-4ebf-9085-d3c5502368b1_1.ee7025bea3d1ac0d918d9bda797500f0.jpeg',
                        review_description: 'So stinking nutty',
                        rating: 7
                    },
                    {
                        name: 'Nutty Bar',
                        image_url: 'http://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000717&imageID=7442&recipeId=243',
                        review_description: 'Childhood Favorite',
                        rating: 8.5
                    }
                ]);
        });
};
