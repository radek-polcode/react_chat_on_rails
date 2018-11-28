Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  resources :chatrooms do
    resources :messages
  end
  root to: 'chatrooms#index'
end
