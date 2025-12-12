const loggedInKey = "isLoggedIn";

// Login form handling
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value.trim().toLowerCase();
        let password = document.getElementById("password").value.trim();

        if (username === "john marr canillo" && password === "123123") {
            localStorage.setItem(loggedInKey, "true");
            window.location.href = "home.html";
        } else {
            document.getElementById("error").textContent = "Incorrect username or password.";
        }
    });
}

// Protect home.html from unauthorized access
if (window.location.href.endsWith("home.html")) {
    if (localStorage.getItem(loggedInKey) !== "true") {
        window.location.href = "index.html";
    }
}

// Logout button handling
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to logout?")) {
            localStorage.removeItem(loggedInKey);
            window.location.href = "index.html";
        }
    });
}