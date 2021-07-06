const createPost = async (event) => {
    event.stopPropagation();

    const userId = event.target.getAttribute("data-userid");
    const blogContent = document.querySelector(".new-blog-title").value;

    const response = await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({ userId, blogContent }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to create post.");
    }
}

const updatePost = async (event) => {
    event.stopPropagation();

    const postId = event.target.getAttribute("data-postid");
    const blogContent = document.querySelector(`.blog-title-${postId}`).textContent;
    const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ blogContent }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to update post.");
    }
};

const deletePost = async (event) => {
    event.stopPropagation();

    const postId = event.target.getAttribute("data-postid");
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to delete post.");
    }
}

document.querySelector(".new-post").addEventListener("click", createPost);
document.querySelectorAll(".update-post").forEach((post) => {
    post.addEventListener("click", updatePost);
});
document.querySelectorAll(".delete-post").forEach((post) => {
    post.addEventListener("click", deletePost);
});