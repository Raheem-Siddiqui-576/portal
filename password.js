function createAccount() {
        let cnic = document.getElementById("cnic").value.trim();
        let dob = document.getElementById("birth").value;
        let password = document.getElementById("password").value.trim();

        // Save to localStorage (common for both student & teacher)
        localStorage.setItem("userCnic", cnic);
        localStorage.setItem("userDob", dob);
        localStorage.setItem("userPassword", password);

        alert("Account created successfully!");
        return false; // prevent form refresh
    }