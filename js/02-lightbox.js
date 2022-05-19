import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.map((item)=>{
    gallery.insertAdjacentHTML('afterbegin', `<li>
    <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a></li>
  `);
  })
        

  var lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay: '250'});


 







//   gallery.addEventListener ('click', magic);

//   function magic (event) {
//       event.preventDefault();
//       if (event.target.nodeName !== "IMG") {
//         return;}

//       const selectedImg = event.target.dataset.source;

//       const instance = basicLightbox.create(`
//       <img src="${selectedImg}" width="800" height="600">
//       `);

//       instance.show()

// document.addEventListener("keydown", event => {
//   if (event.key === 'Escape') {
//     instance.close();
//   }
//   }); 
//   }

