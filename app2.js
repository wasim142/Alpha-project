function validate() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("pass").value;
    if (x == "" && y == "") {
        document.getElementById("ename").innerText = "UserName Required";
        document.getElementById("epass").innerText = "Password Required";
        return false;
    }
    else if (x == "") {
        document.getElementById("ename").innerText = "UserName Required";
        return false;
    }
    else if (y == "") {
        document.getElementById("epass").innerText = "Password Required";
        return false;
    }
    else if (x == "Lala" && y == "Rajput") {
        document.getElementById("epass").innerText = "Login Done";
        return true;
    } else {
        document.getElementById("epass").innerText = "Wrong Credentials";
        return false;
    }
}