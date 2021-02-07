class API{
    constructor(port=3000){
         this.port = port
         this.url = `http://localhost:${port}`
    }


    // helpers 
    parseJSON = res => res.json()
    
    // getters 
    get highscoreURL(){
        return this.url + '/highscores'
    }
    get usersURL(){
        return this.url + '/users'
    }

    // FETCH  
    fetchScores = () => {
        fetch(this.highscoreURL)
        .then(this.parseJSON)
    }

    fetchScore = (scoreID) => {
        fetch(this.highscoreURL + `/${scoreID}`)
        .then(this.parseJSON)
    }

    fetchUsers = () => {
        fetch(this.usersURL)
        .then(this.parseJSON)
    }

    fetchUser = (userID) => {
        fetch(this.usersURL + `/${userID}`)
        .then(this.parseJSON)
    }

   // POSTS//
   postUser = body => fetch(this.usersURL, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
    },
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  postUserScore = body => fetch(this.highscoreURL, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
    },
    body: JSON.stringify(body)
  }).then(this.parseJSON)
}