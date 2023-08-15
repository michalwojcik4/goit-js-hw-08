// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const items = []; 
for(const galleryItem of galleryItems){
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.classList.add('gallery__item');
    a.href = galleryItem.original;
    li.append(a);

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    a.append(img);

    items.push(li);
}

gallery.append(...items);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

new SimpleLightbox('.gallery__item', {
    nav: false,
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
    swipeClose: false,
});