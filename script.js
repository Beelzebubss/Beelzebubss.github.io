function show() {
 
    /* Get image and change value
    of src attribute */
    let image = document.getElementById("pic");

    image.src = "groupic.jpg"

    document.getElementById("pin")
        .style.display = "none";
}