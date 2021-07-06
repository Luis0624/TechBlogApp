// This is the login handler.
// This sends a POST request to the back end through the fetch API.
// Will likely need to update the query selectors to match handlebars templates.

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector(".input-email").value.trim();
    const password = document.querySelector(".input-password").value.trim();

    if (email && password){
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to log in");
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);