class CreateSucursales < ActiveRecord::Migration[5.0]
  def change
    create_table :sucursales do |t|
      t.string :nombre
      t.string :calle
      t.string :colonia
      t.integer :numeroExterior
      t.integer :numeroInterior
      t.string :ciudad
      t.string :pais
      t.references :usuarios, foreign_key: true

      t.timestamps
    end
  end
end
