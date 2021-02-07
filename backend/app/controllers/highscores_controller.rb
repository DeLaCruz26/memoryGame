class HighscoresController < ApplicationController
    def index 
        highscores = Highscore.all 
        render json: highscores 
    end 

    def show
        highscore = Highscore.find_by_id(params[:id])
        render json: highscore
    end 

    def create 
        user = User.find_or_create_by(user_params)
       highscore = user.highscores.build(highscores_params)
       if user.valid? && highscore.save
      render json: highscore
        else 
            render json: {error: "Sorry, try again!"}
        end
    end 

    def destroy
        highscore = Highscore.find_by_id(params[:id])
        highscore.destroy
        render json: highscore
    end


private 
    def highscores_params
        params.require(:highscore).permit(:user_highscore,:user_initials)
    end 

    def user_params
        params.require(:user).permit(:username)
    end 
end
