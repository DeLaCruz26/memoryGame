class CreateHighscores < ActiveRecord::Migration[6.0]
  def change
    create_table :highscores do |t|
      t.integer :user_highscore
      t.string :user_initials
      t.integer :user_id

      t.timestamps
    end
  end
end
