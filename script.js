$(document).ready(function () {
    // Change password input type to "password"
    $("input[name='password1']").attr("type", "password");
    $("input[name='password2']").attr("type", "password");

    // Prevent form from reloading on submit
    $("#new-account-form").submit(function (event) {
        event.preventDefault();

        // Clear previous results and errors
        clearResults();

        // Validate email
        if (!isValidEmail()) {
            return;
        }

        // Display entered email in the output
        const email = $("input[name='email']").val();
        $("#output").text(`Email: ${email}`);

        // Check if passwords match
        const password1 = $("input[name='password1']").val();
        const password2 = $("input[name='password2']").val();

        if (password1 !== password2 || password1 === "") {
            // Display error message for password mismatch or empty password
            $("#output").append("<br>Passwords do not match or cannot be empty");
        } else {
            // Display success message
            $("#output").append("<br>Account created successfully");
        }
    });

    // Clear error messages on focus
    $("input").focus(function () {
        clearResults();
    });
});

function clearResults() {
    // Clear previous error messages
    $("#output").text("");
}

function isValidEmail() {
    em = $.trim($("input[name='email']").val());
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(em)) {
        return true;
    } else {
        // Display error message for invalid email
        $("#output").text("Invalid email format");
        return false;
    }
}
