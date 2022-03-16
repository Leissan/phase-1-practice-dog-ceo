console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const imgList=JSON.stringify(imgUrl)

console.log(imgList)

//Add JavaScript that:
//on page load, fetches the images using the url above ⬆️
//parses the response as JSON
//adds image elements to the DOM for each 🤔 image in the array

function addImage(){
    let card=document.createElement('li')
    card.className='card'
    card.innerHTML=`
    <img src="${message}" img width="300">

    document.querySelector("#dog-image-container").appendChild(card)`
}


function challengeOne(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res=> res.json())
    .then(data => {
        data.message.forEach(imageUrl=>{
                const img=document.createElement('img')
                img.src=imageUrl
                document.getElementById("dog-image-container").append(img)
        })

    })
}

challengeOne()

