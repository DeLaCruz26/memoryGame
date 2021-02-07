class Highscore{
    static  displayScores = () =>{
       const main = document.querySelector(".highscoresArea")
        main.innerHTML = ""

        api.fetchUsers().then((users)=> {
            users.forEach(user => {
                console.log(user)
                const ol = document.createElement("ol")
                ol.className = "user-list"
                user.scores.forEach(score =>{
                    const p = document.createElement("p")
                    p.className = "highscore-list"
                    p.innerText = `USERNAME: ${highscore.user_initials}- HIGHSCORE:${highscore.user_highscore}`
                    ol.append(p)
                })
                main.append(ol)
            
            }) 
            const newGame = document.createElement("BUTTON")
         newGame.innerText = "New Game"
            main.append(newGame)
           
         newGame.addEventListener("click",() =>{
                this.reset()
            })
        })

    }

    static reset = () => {
        const main = document.querySelector(".highscoresArea")
            main.innerHTML = ""
            newImagArray.forEach(newPic=> new Mario(newPic)) 
    }

}
 