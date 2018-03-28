Rails.application.routes.draw do

  resources :users

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  get 'qa', to:'tops#qa'
  get 'support', to:'tops#support'

  resources :trades


  root 'tops#top'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
