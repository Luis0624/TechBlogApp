// DASHBOARD ROUTE
// ADD AUTHENTICATION HERE
const router = require("express").Router();
const { User, Post } = require("../models");
const checkAuthorization = require("../utils/authorization");

// This will get the user by id, and display all the blog posts they've made.
router.get("/:id", checkAuthorization, async (req, res) => {
    try {
        const userSpecificPosts = await User.findByPk(req.params.id, {
            include:
                { model: Post, as: "post_creator" }
        });
        const usersPosts = userSpecificPosts.get({ plain:true });
        console.log(usersPosts)
        res.status(200).render("dashboard", {
            usersPosts,
            logged_in: req.session.logged_in,
            userId: req.session.user_id
        })
    } catch (err) {
        res.status(400).json("Page not found!");
    }
});

module.exports = router;


