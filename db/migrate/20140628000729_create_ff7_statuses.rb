class CreateFf7Statuses < ActiveRecord::Migration
  def up
    create_table :ff7_statuses do |t|
      t.integer :ff7_character_id
      t.integer :str
      t.integer :dex
      t.integer :vit
      t.integer :mgc
      t.integer :spi
      t.integer :luc
      t.integer :atk
      t.integer :atk_p
      t.integer :def
      t.integer :def_p
      t.integer :mgc_atk
      t.integer :mgc_def
      t.integer :mgc_def_p
      t.timestamps
    end
  end
  
  def down
    drop_table :ff7_statuses
  end
end
