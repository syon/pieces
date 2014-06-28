class CreateFf7Characters < ActiveRecord::Migration
  def up
    create_table :ff7_characters do |t|
      t.string :name
      t.integer :lv
      t.integer :hp
      t.integer :mp
      t.timestamps
    end
  end
  
  def down
    drop_table :ff7_characters
  end
end
