document.addEventListener("DOMContentLoaded", function () {

const images = [
    { src: "images/photo1.jpg", categories: ["blue"] },
    { src: "images/photo2.jpg", categories: ["green"] },
    { src: "images/photo3.jpg", categories: ["red"] },
    { src: "images/photo4.jpg", categories: ["pink"] },
    { src: "images/photo5.jpg", categories: ["bw"] },
    { src: "images/photo6.jpg", categories: ["yellow"] },
];

const gallery = document.getElementById("gallery");
const filters = document.querySelectorAll(".filter-nav li");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function renderGallery(filter) {
    gallery.innerHTML = "";
    let shuffled = shuffle([...images]);

    shuffled.forEach(image => {
        if (filter === "all" || image.categories.includes(filter)) {
            const div = document.createElement("div");
            div.classList.add("gallery-item");

            div.innerHTML = `
                <img src="${image.src}" loading="lazy" alt="">
            `;

            gallery.appendChild(div);
        }
    });
}

filters.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-nav .active").classList.remove("active");
        button.classList.add("active");
        renderGallery(button.dataset.filter);
    });
});

renderGallery("all");

});
