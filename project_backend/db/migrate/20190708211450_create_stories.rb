class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :content
      t.integer :like_count, default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
