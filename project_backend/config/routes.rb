Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :tags
  resources :stories
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
