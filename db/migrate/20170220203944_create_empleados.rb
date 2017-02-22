class CreateEmpleados < ActiveRecord::Migration[5.0]
  def change
    create_table :empleados do |t|
      t.string :nombre
      t.string :rfc
      t.string :puesto
      t.references :sucursales, foreign_key: true

      t.timestamps
    end
  end
end
