//when DOM loads,display ramen images using img tagin ramen-menu //fetch GET

const ramenMenuContainer = document.getElementById('ramen-menu');
const ramenNameH2 = document.querySelector('h2.name')
const ramenRestH3 = document.querySelector('h3.restaurant')
const ramenImageContainer = document.getElementById('display-one-image')
const ramenRatingContainer = document.getElementById('rating-display')
const ramenCommentContainer = document.getElementById('comment-display')
const newRamenForm = document.getElementById('new-ramen')


fetch("http://localhost:3000/ramens")
.then(resp=> resp.json())
.then((arrayOfObjects)=> {
    arrayOfObjects.forEach(renderRamen)
    ramenImageContainer.src = arrayOfObjects[0].image;
    ramenNameH2.innerText = arrayOfObjects[0].name;
    ramenRestH3.innerText = arrayOfObjects[0].restaurant
    ramenRatingContainer.innerText = arrayOfObjects[0].rating
    ramenCommentContainer.innerText = arrayOfObjects[0].comment

})


function renderRamen (ramenObject) {
    const ramenImage = document.createElement('img');
    ramenImage.alt = ramenObject.name;
    ramenImage.src = ramenObject.image
    ramenMenuContainer.append(ramenImage)

    ramenImage.addEventListener('click', () => {
    ramenNameH2.innerText = ramenObject.name;
    ramenRestH3.innerText = ramenObject.restaurant;
    ramenImageContainer.src = ramenObject.image;
    ramenRatingContainer.innerText = ramenObject.rating;
    ramenCommentContainer.innerText = ramenObject.comment
    })
}

newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    }
    renderRamen(newRamen)
    newRamenForm.reset()
})






////////////////////////SOLUTION CODE /////////////////////
////////////////////////SOLUTION CODE /////////////////////
////////////////////////SOLUTION CODE /////////////////////


/*const ramenMenuContainer = document.getElementById('ramen-menu')
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
*/
