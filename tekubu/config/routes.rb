Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
  get "about" => "home#about", as: "about"

  # resources :books, :only => [:index, :show]
  resources :books
  resources :events

  get 'tags/:tag', to: 'events#index', as: :tag

  # get 'home#show'
end
