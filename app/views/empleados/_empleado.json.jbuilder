json.extract! empleado, :id, :nombre, :rfc, :puesto, :sucursales_id, :created_at, :updated_at
json.url empleado_url(empleado, format: :json)