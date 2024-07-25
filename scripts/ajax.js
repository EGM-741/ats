$.ajax({
    type: "post",
    url: "www.example.com/subfolder/page.php",
    data: {
        myLuckyNumber: 13
    },
    success: function (response) {
        console.log(response);
    }
});
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}