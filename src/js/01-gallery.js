// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

console.log(galleryItems);


// console.log(galleryItems);

const galleryList = document.querySelector(`.gallery`)
const gallery=createGallery(galleryItems)

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
     return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
 }).join(``)    
}
// console.log(createGallery(galleryItems))

galleryList.insertAdjacentHTML(`afterbegin`, gallery)

galleryList.addEventListener(`click`, new SimpleLightbox('.gallery a', { captionsData: `alt`, captionPosition: `bottom`, captionDelay: 250 })
);

