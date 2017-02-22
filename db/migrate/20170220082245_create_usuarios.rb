class CreateUsuarios < ActiveRecord::Migration[5.0]
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :rfc
      t.string :nombreEmpresa

      t.timestamps
    end
  end
end
