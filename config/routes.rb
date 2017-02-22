Rails.application.routes.draw do

  resources :empleados
  resources :sucursales
  devise_for :usuarios, controllers: {
      sessions: 'usuarios/sessions',
      registrations: 'usuarios/registrations'

  }
  resources :usuarios
  get 'sucursales/index'





  root :to => 'sucursales#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
