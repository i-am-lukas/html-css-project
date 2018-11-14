function show() {
    var actual = document.getElementById("navItems");

    if (actual.style.display == "none") {
        actual.style.display = "block";
        actual.style.transition = "all 0.5s"; // not working
    } else {
        actual.style.display = "none";
        actual.style.transition = "all 0.5s"; // not working, why?
    }
}