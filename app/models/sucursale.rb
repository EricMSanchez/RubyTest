class Sucursale < ApplicationRecord
  belongs_to :usuario, optional:true
  has_many :empleados
end
