Rails.application.routes.draw do

  resources :users
  get 'mypage', to:'users#mypage'

  namespace :admin do
    get 'top',to:'tops#top'

    resources :users,only:[:index]
    post 'users/done', to:'users#done'
    resources :coins,only:[:new,:create,:edit]
  end


  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  get 'qa', to:'tops#qa'
  get 'qa_show/:id', to:'tops#qa_show', as:'qa_show'
  get 'legal',to:'tops#legal'
  get 'important_things',to:'tops#important_things'
  get 'support', to:'tops#support'
  get 'explanation', to:'tops#explanation'

  resources :trades
  post 'trades/confirm', to:'trades#confirm'



  root 'tops#top'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
