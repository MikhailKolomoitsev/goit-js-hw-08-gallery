const picBase= [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.js-gallery')
const lightbox=document.querySelector('.lightbox')
const closeButton = document.querySelector('.lightbox__button')
const lightboxOverlay=document.querySelector('.lightbox__overlay')
const lightboxImage=document.querySelector('.lightbox__image')

const galleryItems = picBase.map(element => {
 return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${element.original}"
  >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li> ` 
}).join('')
galleryList.insertAdjacentHTML('afterbegin', galleryItems)


galleryList.addEventListener('click', openLightbox)
function openLightbox(event) {
const pickOnImage=event.target.classList.contains('gallery__image')
 event.preventDefault();
  if (!pickOnImage){
  return
  }
  else if (pickOnImage){
    lightbox.classList.add('is-open')
    lightboxImage.src=`${event.target.dataset.source}`
  }
}

lightboxOverlay.addEventListener('click', closeLightbox)
closeButton.addEventListener('click', closeLightbox)
function closeLightbox() {
  lightbox.classList.remove('is-open')
  lightboxImage.src=""
}


const images=document.querySelectorAll('.gallery__image')
const arrayImages = []
images.forEach(el => arrayImages.push(el.getAttribute('data-source')))
window.addEventListener('keydown', commandsForLightbox)
function commandsForLightbox(event) {
  let newIndex;
  const currentIndex = arrayImages.indexOf(lightboxImage.src);

  if (event.code === "Escape") {
    closeLightbox()
  } else if (event.code === "ArrowRight") {
    newIndex = currentIndex + 1
    if (newIndex === arrayImages.length) {
      newIndex=0
    }
} else if (event.code === "ArrowLeft") {
    newIndex = currentIndex - 1
    if (newIndex == -1) {
      newIndex=arrayImages.length-1
    }

  }
  lightboxImage.src=arrayImages[newIndex]
}

