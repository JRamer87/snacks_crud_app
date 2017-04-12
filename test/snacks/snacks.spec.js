'use strict';


process.env.NODE_ENV = 'test';
process.env.PORT = 8000;

const mocha = require('mocha');
const expect = require('chai')
    .expect;
const request = require('supertest');

const app = require('../../server');
const knex = require('../../db/knex');


beforeEach(function() {
    return knex('snacks')
        .del()
        .then(function() {
            return knex('snacks')
                .insert([{
                        id: 1,
                        name: 'Twinkies',
                        image_url: 'http://media.treehugger.com/assets/images/2012/12/twinkies.jpeg',
                        review_description: 'Twinkies are the best snack ever',
                        rating: 7.5
                    },
                    {
                        id: 2,
                        name: 'Nutter Butter',
                        image_url: 'https://i5.walmartimages.com/asr/02485090-1082-4ebf-9085-d3c5502368b1_1.ee7025bea3d1ac0d918d9bda797500f0.jpeg',
                        review_description: 'So stinking nutty',
                        rating: 7
                    },
                    {
                        id: 3,
                        name: 'Nutty Bar',
                        image_url: 'http://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=52000717&imageID=7442&recipeId=243',
                        review_description: 'Childhood Favorite',
                        rating: 8.5
                    }
                ]);
        });
});

describe("snacks route", function() {
    describe("#index", function() {
        it('show all the snacks', function() {
            return request(app)
                .get('/snacks')
                .then(function(response) {
                    expect(response.text)
                        .to.include('Twinkies');
                    expect(response.text)
                        .to.include('Nutter Butter');
                    expect(response.text)
                        .to.include('Nutty Bar');
                });
        });
    });
    describe("#post", function() {
        it('creates a snack', function() {
            return request(app)
                .post('/snacks')
                .send({ //This will be req.body by default
                    snack: { //Add this line if you added a resource property to the req.body object
                        name: 'a new snack',
                        image_url: 'whateevr.png',
                        review_description: 'mediocre',
                        rating: 4
                    }
                })
                .expect(302)
                .then(function(response) {
                    return request(app)
                        .get('/snacks')
                        .then(function(response) {
                            expect(response.text)
                                .to.include('a new snack');
                        });
                });
        });
    });
    describe("#new form", function() {
        it('Sends the new snack form to the client', function() {
            return request(app)
                .get('/snacks/new')
                .then(function(response) {
                    expect(response.text)
                        .to.include('Name');
                    expect(response.text)
                        .to.include('Image URL');
                    expect(response.text)
                        .to.include('Review Description');
                    expect(response.text)
                        .to.include('Rating');
                });
        });
    });
    describe("#edit form", function() {
        it('Sends the new edit form to the client', function() {
            return request(app)
                .get('/snacks/:snack_id/edit')
                .then(function(response) {
                    expect(response.text)
                        .to.include('Name');
                    expect(response.text)
                        .to.include('Image URL');
                    expect(response.text)
                        .to.include('Review Description');
                    expect(response.text)
                        .to.include('Rating');
                });
        });
    });
    describe("#delete form", function() {
        it('Sends the new delete form to the client', function() {
            return request(app)
                .get('/snacks/delete')
                .then(function(response) {
                    expect(response.text)
                        .to.include('Id');
                });
        });
    });
    describe("#show route", function() {
        it('Shows a single snack', function() {
            return request(app)
                .get('/snacks/1')
                .then(function(response) {
                    expect(response.text)
                        .to.include('Twinkies');
                });
        });
    });
    describe("#update route", function() {
        it('creates a snack', function() {
            return request(app)
                .put('/snacks/1')
                .send({
                    snack: {
                        id: 1,
                        name: 'I edited this snack',
                        image_url: 'https://img.clipartfest.com/cf2e9fdcc1674ce5d7bfba7757e8238d_photo-edit-clip-art-edit-clipart_600-280.png',
                        review_description: "Sometimes I choose to edit snacks",
                        rating: 1
                    }
                })
                .expect(302)
                .then(() => {
                    return request(app)
                        .get('/snacks')
                        .then(function(response) {
                            expect(response.text)
                                .to.include('I edited this snack');
                        });
                })
        });
    });
    describe("#delete route", function() {
        it('deletes a snack', function() {
            return request(app)
                .delete('/snacks/1')
                .send({
                    id: 1
                })
                .expect(302);
            request(app)
                .get('/snacks')
                .then(function(response) {
                    expect(response.text)
                        .to.not.include('Twinkies');
                });
        });
    });
});
