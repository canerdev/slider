const img = document.querySelectorAll('.img')
const bigImg = document.querySelector('#bigImg')
const imgDOM = document.querySelector('#imgDOM')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const gallery = document.querySelector('.gallery')



img.forEach(item => {
    item.addEventListener('click', (event) =>  {
        event.stopPropagation() // iconlara da eklkemeyi unutma

        gallery.style.opacity = '.2'
       
        // clone node 
        let cloneEvent = event.target.cloneNode(true)
        imgDOM.innerHTML = '' 
        bigImg.style.display = 'flex'

        cloneEvent.style.width = '100%'
        cloneEvent.style.height = '100%'

        imgDOM.append(cloneEvent)
        
        
        imgDOM.style.width = '50%'
        imgDOM.style.height = '50%'
       
        nextImg()
        prevImg()
    })
})

function nextImg() {
   
    next.addEventListener('click', () => {
        event.stopPropagation()
        console.log('next')
    })
}

function prevImg() {
    prev.addEventListener('click', () => {
        event.stopPropagation()
        console.log('prev')
    })
}

// to shut down the slider
document.body.addEventListener('click', () => {
    bigImg.style.display = 'none'
    gallery.style.opacity = '1'
})