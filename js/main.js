
document.addEventListener("DOMContentLoaded", (event) => {

    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", postUsername);
});

const postUsername = (event) => {

    let httpRequest = new XMLHttpRequest();
    let url = "php/handler.php";

    let formData = new FormData();
    formData.append("actionType", "postUsername");
    formData.append("userName", document.getElementById('username').value);

    httpRequest.open("POST", url, true);

    //Send the proper header information along with the request
    //httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //Call a function when the state changes.
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            console.log("Server Response: " + httpRequest.responseText);
            document.getElementById('output').innerHTML = httpRequest.responseText;
        }
    }

    //error due to network issues
    httpRequest.onerror = function(e) {
        console.log("error");
    };	

    httpRequest.ontimeout = function (e) {
        console.log("error, timeout");
    };	

    httpRequest.send(formData);
}