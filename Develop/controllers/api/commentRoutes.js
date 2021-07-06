const { Comment } = require("../../models");
const router = require("express").Router();

// Creating a new comment
// Needs to feed in the user id of who made it, and the post id that it belongs to in the req.body, as well as the comment content
router.post("/:userid/:postid", async (req, res) => {
    try {
        const newComment = await Comment.create({
            userId: req.params.userid,
            postId: req.params.postid,
            commentContent: req.body.commentContent
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

// This update a comment by its specific id
// We need to feed in the new comment in the req.body, and make sure the comment's id is also referenced in the req.params
router.put("/:id", async (req, res) => {
    try {
        const updatedComment = await Comment.update(
            {
                commentContent: req.body.commentContent
            },
            { 
                where: { id: req.params.id }
            });
            res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// This deletes a comment by its specific id
// We need to feed in the new comment in the req.body, and make sure the comment's id is also referenced in the req.params
router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.destroy({
                where: { id: req.params.id }
        });
        res.status(200).json(deletedComment);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;