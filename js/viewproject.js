function viewProject(id) {
    var examples = ["elmgif", "elmlogin", "elmx"];
    var length   = examples.length;
    var element;
    var i;

    for (i=0; i < length; i++) {
        element = document.getElementById(examples[i]);

        if (examples[i] === id) {
            if (element.style.display === "none") {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
        }
        else {
            element.style.display = "none";
        }
    }
}
