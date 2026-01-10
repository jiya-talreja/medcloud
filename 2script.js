
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#check input[type='checkbox']");
    const button = document.querySelector("button");
    let name = localStorage.getItem("username");
    if (name) {
      document.getElementById("displayName").textContent = name;
    } 

    button.disabled = true;
    button.style.opacity = "0.6";

    checkbox.addEventListener("change", () => {
        button.disabled = !checkbox.checked;
        button.style.opacity = checkbox.checked ? "1" : "0.6";
    });

    button.addEventListener("click", () => {
        window.location.href = "department.html";
    });
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
        index = (index + 1) % slides.length; // loop back
    }

    setInterval(showSlide, 4000); // Change every 4s

    
});
