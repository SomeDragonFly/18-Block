var age = prompt("Age?");

if (age >= 18) {
    document.getElementById("video").innerHTML = 
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2Z_q_YvnRQk?si=td4ptri_4iU7tbio\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
} else {
    document.getElementById("video").innerHTML = "<p>Sorry, this content is restricted to users aged 18 and above.</p>";
}