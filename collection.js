var sidenavbar = document.querySelector(".sidenavbar")

function clickme() {
    sidenavbar.style.left = "0"
}

function cancelme() {
    sidenavbar.style.left = "-60%"
}

var productcontainer = document.getElementById("music1")
var search = document.getElementById("searchbar1")
var productlist = productcontainer.querySelectorAll(".musicbox")

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h2").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
            productlist[count].style.display = "flex"
        }
    }
})