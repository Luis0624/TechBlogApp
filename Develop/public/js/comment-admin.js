const createComment = async (event) => {
    event.stopPropagation();

    const userId = document.querySelector(".user-profile").getAttribute("data-currentuser");
    console.log(userId);
    const postId = event.target.getAttribute("data-postid");
    console.log(postId);
    const commentContent = document.querySelector(".input-comment").value;
    console.log(commentContent);

    const response = await fetch(`/api/comments/${userId}/${postId}`, {
        method: "POST",
        body: JSON.stringify({ userId, postId, commentContent }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to create comment.");
    }
};

// Couple of explanations for this one:
// 1) We want to store the currently logged in user's ID somewhere in the DOM for future reference.
// 2) Once we have that, we can use that to compare against the IDs assigned to comments, blog posts, etc
const updateComment = async (event) => {
    event.stopPropagation();

    const currentUserId = document.querySelector(".user-profile").getAttribute("data-currentuser");
    console.log(currentUserId);
    const commentUserId = event.target.getAttribute("data-userid");
    console.log(commentUserId);
    const commentId = event.target.getAttribute("data-commentid");
    const commentContent = document.querySelector(`.input-content-${commentId}`).textContent;
    if (currentUserId !== commentUserId){
        return alert("You cannot edit another user's comments!");
    }
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        body: JSON.stringify({ commentContent }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to update comment.");
    }
};

const deleteComment = async (event) => {
    event.stopPropagation();

    const commentId = event.target.getAttribute("data-commentid");
    console.log(commentId);
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to delete comment.");
    }
};

document.querySelector(".new-comment").addEventListener("click", createComment);
document.querySelectorAll(".update-comment").forEach((comment) => {
    comment.addEventListener("click", updateComment);
});
document.querySelectorAll(".delete-comment").forEach((comment) => {
    comment.addEventListener("click", deleteComment);
});