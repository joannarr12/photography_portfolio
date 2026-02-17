const images = [
    { src: "images/photo1.jpg", categories: ["blue"] },
    { src: "images/photo2.jpg", categories: ["green"] },
    { src: "images/photo3.jpg", categories: ["red"] },
    { src: "images/photo4.jpg", categories: ["pink", "purple"] },
    { src: "images/photo5.jpg", categories: ["bw"] },
    { src: "images/photo6.jpg", categories: ["yellow"] },
    { src: "images/photo7.jpg", categories: ["orange"] },
    { src: "images/photo8.jpg", categories: ["blue", "green"] },
    { src: "images/photo9.jpg", categories: ["purple"] },
    { src: "images/photo10.jpg", categories: ["red"] },
    // Add up to 30 here easily
];

const gallery = document.getElementById("gallery");
const filters = document.querySelectorAll(".top-nav li");

/* Shuffle function */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

/* Render images */
function renderGallery(filter) {
    gallery.innerHTML = "";
    let shuffled = shuffle([...images]);

    shuffled.forEach(image => {
        if (filter === "all" || image.categories.includes(filter)) {
            const div = document.createElement("div");
            div.classList.add("gallery-item");

            div.innerHTML = `<img src="${image.src}" alt="">`;

            gallery.appendChild(div);
        }
    });
}

/* Navigation Click */
filters.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");
        renderGallery(button.dataset.filter);
    });
});

/* Initial Load */
renderGallery("all");
