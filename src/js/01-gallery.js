// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

const markup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", markup);

function createGallery(items) {
    return items.map((item) => {
        const { preview, original, description } = item;
        // console.log(item);
        return `
            <a class="gallery__item" 
                href="${original}">
            <img class="gallery__image" 
                src="${preview}"" 
                alt="${description}" />
            </a>
        `;
    }).join(''); 
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
