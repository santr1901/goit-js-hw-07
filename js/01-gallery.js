import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.map((item)=>{
    gallery.insertAdjacentHTML('afterbegin', `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`);
  })


gallery.addEventListener ('click', magic);


  function magic (event) {
      event.preventDefault();
      if (event.target.nodeName !== "IMG") {
        return;}

      const selectedImg = event.target.dataset.source;

      const instance = basicLightbox.create(`
      <img src="${selectedImg}" width="800" height="600">
      `);

      instance.show()

document.addEventListener("keydown", event => {
  if (event.key === 'Escape') {
    instance.close();
  }
  }); 
  }

  
