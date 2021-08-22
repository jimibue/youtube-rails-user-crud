Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "users#index"

  get "/users", to: "users#index"
  get "/users/new"
  post "/users", to: "users#create"

  get "/users/:id", to: "users#show"
  get "/users/:id/edit", to: "users#edit"

  patch "/users/:id", to: "users#update"
  put "/users/:id", to: "users#update"

  delete "/users/:id", to: "users#destroy"
end
