Rails.application.routes.draw do

  namespace :admin do
    get 'coins/edit'
  end

  resources :users

  namespace :admin do
    get 'top',to:'tops#top'
    resources :users,only:[:index]
    resources :coins,only:[:new,:create]
  end


  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  get 'qa', to:'tops#qa'
  get 'support', to:'tops#support'
  get 'explanation', to:'tops#explanation'

  resources :trades
  post 'trades/confirm', to:'trades#confirm'



  root 'tops#top'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
