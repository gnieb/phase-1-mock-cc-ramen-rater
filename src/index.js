const ramenMenuContainer = document.getElementById('ramen-menu')
const commentContainer = document.getElementById('comment-display')
const ratingContainer = document.getElementById('rating-display')
const displayImage = document.getElementById('display-one-image')
const restaurantContainer = document.querySelector('h3.restaurant')
const h2Name = document.querySelector('h2')

fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then((array) => {
    array.forEach(renderOneImage)
})


function renderOneImage (imageObj) {
const ramenImage = document.createElement('img')
ramenImage.src = imageObj.image
ramenMenuContainer.append(ramenImage)

ramenImage.addEventListener('click', () => {

commentContainer.innerText = imageObj.comment
ratingContainer.innertext = imageObj.rating
displayImage.src = imageObj.image
h2Name.innerText = imageObj.name
restaurantContainer.innerText = imageObj.restaurant

})
}


const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const ourNewRamenObject = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        comment: e.target['new-comment'].value,
        }
    
    renderOneImage(ourNewRamenObject)
    newRamenForm.reset() 
}
)

