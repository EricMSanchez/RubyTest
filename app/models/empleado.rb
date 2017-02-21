class Empleado < ApplicationRecord
  belongs_to :sucursale , optional:true
end
