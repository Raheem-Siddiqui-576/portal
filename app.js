 function loginUser() {
        let cnic = document.getElementById("cnic").value.trim();
        let password = document.getElementById("password").value.trim();

        let storedCnic = localStorage.getItem("userCnic");
        let storedPassword = localStorage.getItem("userPassword");

        if (cnic === storedCnic && password === storedPassword) {
            alert("Student Login Successfully! ✓");
            window.location.href = "dashboard/dashboard.html"; // Student dashboard
        } else {
            alert("Invalid CNIC or Password!");
        }

        return false; // prevent form refresh
    }