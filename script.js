function search() {
	document.getElementById("searchBar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});
}

function myFunc() {
	window.open("results_sample.html", "_self");
}