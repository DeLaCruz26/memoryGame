class Mario{

    static selectedMario = null 
    static numberOfMariosSelected = 0
    static timer = 0
    static chosenMarios = 0

    constructor(imgUrl){
            this.imgUrl = imgUrl;
            this.createElements()
           
          
            

        document.querySelector(".marioCards").appendChild(this.newMario)
            this.image1 = document.createElement("img");
            this.image1.src = imgUrl
            this.newMario.append(this.image1)
            this.newMario.append(this.backSide)
            this.newMario.appendChild(this.cardHolder)

         this.newMario.addEventListener("click",() =>{
            if (Mario.numberOfMariosSelected >= 2){
                return 
            }

            this.image1.style.transform = "rotateY(0deg)"
            this.backSide.style.transform = "rotateY(180deg)"
            
            if (Mario.selectedMario === null){
                Mario.selectedMario = this 
                Mario.numberOfMariosSelected++
            } else if (Mario.selectedMario.imgUrl !== imgUrl){
                Mario.numberOfMariosSelected++
                const previousSelectedMario = Mario.selectedMario
                Mario.selectedMario = this 
                this.firstSetTimeOut(previousSelectedMario)
            } else if (Mario.selectedMario.imgUrl === imgUrl){
                Mario.numberOfMariosSelected++
                const previousSelectedMario = Mario.selectedMario
                Mario.selectedMario = this 
                this.secondSetTimeOut(previousSelectedMario)
            }
        });
         
        }

    createElements = () =>{
        this.backSide = document.createElement("div");
        this.backSide.className="backSide"
        this.newMario = document.createElement("div")
        this.newMario.className="cards"
        this.cardHolder = document.createElement("div")
        this.cardHolder.className="cardHolder"
    }
    
    firstSetTimeOut = (previousSelectedMario) =>{
        window.setTimeout( () => {
            previousSelectedMario.backSide.style.transform = "rotateY(0deg)"
            previousSelectedMario.image1.style.transform = "rotateY(180deg)"
            Mario.selectedMario.backSide.style.transform = "rotateY(0deg)"
            Mario.selectedMario.image1.style.transform = "rotateY(180deg)"
            Mario.selectedMario = null
            Mario.numberOfMariosSelected = 0 
    },1000)
    }
    secondSetTimeOut = (previousSelectedMario) => {
        window.setTimeout( () =>{
            this.image1.src = this.imgUrl
            Mario.selectedMario.newMario.style.visibility = "hidden"
            previousSelectedMario.newMario.style.visibility = "hidden"
            Mario.selectedMario = null
            Mario.numberOfMariosSelected = 0 
            Mario.chosenMarios += 2 
            if (Mario.chosenMarios === 12){
                document.getElementById("user-initials").style.visibility = "visible"
                alert(` YOUR SCORE is ${Mario.timer}!`)
                clearInterval(scoreInterval)
                const main = document.querySelector(".marioCards")
                main.innerHTML = ""
                document.addEventListener("submit",(event)=>{
                    event.preventDefault()
                 const userInitials = document.getElementById("user-initials").children[0].value
                    api.postUserScore({
                        user:{username:userInitials},
                        score:{user_initials:userInitials,user_score:Mario.timer}
                    }).then(Score.displayScores)
                })
            }  
        },1000)
    }
}
