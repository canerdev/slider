const img = document.querySelectorAll('.img')
const bigImg = document.querySelector('#bigImg')
const imgDOM = document.querySelector('#imgDOM')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const gallery = document.querySelector('.gallery')


// not to delete next or previous images from the gallery
const imagesArr = []
for (let i = 0; i < img.length; i++) {
    imagesArr.push(img[i].cloneNode(true))
}

let currentImg; // to figure out the index of the current image 

img.forEach(img => {
    img.addEventListener('click', () => {
        event.stopPropagation()

        gallery.style.opacity = '.2' // fot the slider effect
        var cloneImg = event.target.cloneNode(true) // not to delete the image clicked

        // appending image 
        imgDOM.innerHTML = ''
        imgDOM.appendChild(cloneImg)

        // adding css properties 
        bigImg.style.display = 'flex'
        cloneImg.style.width = '100%'
        cloneImg.style.height = '100%'
        imgDOM.style.width = '50%'
        imgDOM.style.height = '50%'

        // 
        currentImg = imgDOM.children.item(0)
    })
})

var index; // the index of the next/previous image 

// next 
const nextImg = () => {
    next.addEventListener('click', () => {
        event.stopPropagation()

        console.log()
        index = imagesArr.findIndex(item => item.src === currentImg.src)

        // adding css properties
        imgDOM.innerHTML = ''

        imagesArr[index + 1].style.width = '100%'
        imagesArr[index + 1].style.height = '100%'
        imgDOM.appendChild(imagesArr[index + 1])

        currentImg = imagesArr[index + 1]
    })
}

// prev
const prevImg = () => {
    prev.addEventListener('click', () => {
        event.stopPropagation()

        index = imagesArr.findIndex(item => item.src === currentImg.src)

        // adding css properties
        imgDOM.innerHTML = ''

        imagesArr[index - 1].style.width = '100%'
        imagesArr[index - 1].style.height = '100%'
        imgDOM.appendChild(imagesArr[index - 1])

        currentImg = imagesArr[index - 1]
    })
}

nextImg()
prevImg()

// to shut down the slider
document.body.addEventListener('click', () => {
    bigImg.style.display = 'none'
    gallery.style.opacity = '1'
})










