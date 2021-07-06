const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// We grab only the username and comment content from this?
router.get("/", async (req, res) => {
    try {
        const postsData = await Post.findAll({
            include: [
                {
                    model: User,
                    as: "post_creator",
                    attributes: ["username"]
                }
            ]
        });
        const posts = postsData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in, // logged in status from the session object
            userId: req.session.user_id // user id from the session object
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// This is a placeholder, and will need the login page to be rendered.
router.get("/signin", async (req, res) => {
    try {
        res.status(200).render("signin");
    } catch (err) {
        res.status(400).json(err);
    }
});

// This is a placeholder, and will need the create account page.
router.get("/signup", async (req, res) => {
    try {
        res.status(200).render("signup");
    } catch (err) {
        res.status(500).json(err);
    }
})

// This is a placeholder, and will need the logout page to be rendered.
router.get("/signout", async (req, res) => {
    try {
        res.status(200).render("signout");
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;

// // This is a placeholder, and will need the login page to be rendered.
// router.get("/signin", async (req, res) => {
//     try {
//         res.status(200).render("signin");
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // This is a placeholder, and will need the create account page.
// router.get("/signup", async (req, res) => {
//     try {
//         res.status(200).render("signup");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// // This is a placeholder, and will need the logout page to be rendered.
// router.get("/signout", async (req, res) => {
//     try {
//         res.status(200).render("signout");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// module.exports = router;