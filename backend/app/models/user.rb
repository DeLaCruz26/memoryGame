class User < ApplicationRecord
    has_many :highscores, dependent: :destroy
end
