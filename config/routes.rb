Rails.application.routes.draw do
  root 'step_lessons#show'
  resources :step_lessons, only: [:show]
  get '/markdown', to: 'step_lessons#markdown'
end
