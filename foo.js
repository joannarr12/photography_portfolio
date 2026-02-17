document.addEventListener("DOMContentLoaded", function () {

const images = [
    { src: "images/photo1.png", categories: ["blue"] },
    { src: "images/photo2.png", categories: ["green"] },
    { src: "images/photo3.png", categories: ["red"] },
    { src: "images/photo4.png", categories: ["pink"] },
    { src: "images/photo5.png", categories: ["bw"] },
    { src: "images/photo6.png", categories: ["yellow"] },
        { src: "images/photo7.png", categories: ["yellow"] },
            { src: "images/photo8.png", categories: ["yellow"] },
                { src: "images/photo9.png", categories: ["yellow"] },
                    { src: "images/photo10.png", categories: ["yellow"] },




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
