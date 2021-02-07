class HighscoreSerializer < ActiveModel::Serializer
  attributes :id, :user_highscore, :user_initials
  belongs_to :user
end
