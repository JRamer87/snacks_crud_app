"use strict";

const express = require("express");
const router = express.Router();
const knex = require("../db/knex");


router.route("/")
    .get((req, res) => {
        knex("snacks")
            .then((snacks) => {
                res.render("snacks/index", {
                    snacks: snacks
                });
            });
    })
    .post((req, res) => {
        knex('snacks')
            .insert(req.body.snack)
            .then(() => {
                res.redirect('/snacks');
            });
    });
router.route('/new')
    .get((req, res) => {
        res.render('snacks/new');
    });
router.route('/delete')
    .get((req, res) => {
        res.render('snacks/delete');
    });
router.route('/:snack_id/edit')
    .get((req, res) => {
        knex('snacks')
            .where('id', req.params.snack_id)
            .first()
            .then((snack) => {
                res.render('snacks/edit', {
                    snack
                });
            })
    });

router.route('/:snack_id')
    .get((req, res) => {
        knex('snacks')
            .where('id', req.params.snack_id)
            .first()
            .then((snack) => {
                res.render('snacks/show', {
                    id: snack.id,
                    name: snack.name,
                    image_url: snack.image_url,
                    review_description: snack.review_description,
                    rating: snack.rating
                });
            });
    })
    .put((req, res) => {
        knex('snacks')
            .where('id', req.params.snack_id)
            .update(req.body.snack)
            .then(() => {
                res.redirect('/snacks');
            });
    })
    .delete((req, res) => {
        knex('snacks')
            .where('id', req.params.snack_id)
            .del()
            .then(() => {
                res.redirect('/snacks');
            });
    });

module.exports = router;
