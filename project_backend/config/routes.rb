Rails.application.routes.draw do
  resources :story_tags
  resources :likes
  resources :comments
  resources :tags
  resources :stories
  resources :users
  post "/search", to: "filter#search_stories", as: "search_stories"
  post "/filter", to: "filter#filter_stories", as: "filter_stories"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
