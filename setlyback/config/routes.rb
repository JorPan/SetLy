Rails.application.routes.draw do
  resources :songsets
  resources :setlists
  resources :tracks
  resources :artists
  resources :songs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
