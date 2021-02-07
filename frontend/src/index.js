const images = ["http://www.simpleimageresizer.com/_uploads/photos/b1fcd88c/Mario_97_2_100x100.png",
"http://www.simpleimageresizer.com/_uploads/photos/b1fcd88c/Mario_116_1_100x100.png",
"http://www.simpleimageresizer.com/_uploads/photos/b1fcd88c/Mario_87_1_100x100.png",
"http://www.simpleimageresizer.com/_uploads/photos/b1fcd88c/Mario_86_1_100x100.png",
"http://www.simpleimageresizer.com/_uploads/photos/b1fcd88c/Mario_62_1_100x100.png",
"http://www.simpleimageresizer.com/_uploads/photos/b1fcd88c/Mario_39_1_100x100.png"]

randomCard = newImagArray =>{
    let shuffledArray = []
    while (newImagArray.length){
        const randomMarioIndex = Math.floor(Math.random()*newImagArray.length)
        shuffledArray.push(newImagArray[randomMarioIndex])
        newImagArray.splice(randomMarioIndex,1)
    }
    return shuffledArray
}


 newImagArray = [...images, ...images]
// newImagArray = randomCard(newImagArray)
newImagArray.forEach(newPic=> new Mario(newPic))
const scoreInterval = setInterval(function(){Mario.timer++},100)




const api = new API


