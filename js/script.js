function action() {
    const overlay = document.querySelector(".overlay");
    const form = document.querySelector(".form-container");

    overlay.style.background = "transparent";
    overlay.style.backdropFilter = "blur(5px)";
    overlay.style.opacity = "0.5";
    overlay.style.zIndex = "1000";
    overlay.style.display = "block";
    form.style.display = "block";
    document.body.style.overflow = "hidden";

    // Remove any previous click listeners to avoid stacking
    overlay.onclick = function(e) {
        // Only close if clicked directly on overlay, not on form
        if (e.target === overlay) {
            overlay.style.background = "";
            overlay.style.backdropFilter = "";
            overlay.style.opacity = "";
            overlay.style.display = "none";
            form.style.display = "none";
            document.body.style.overflow = "";
        }
    };
}