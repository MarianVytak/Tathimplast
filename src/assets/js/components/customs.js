// Lightgallery
lightGallery(document.getElementById('lightgallery'));


// Navigation anchors
const anchors = document.querySelectorAll('.navigation__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}