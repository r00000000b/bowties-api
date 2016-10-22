Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :bowties, except: [:new, :edit], :defaults => { :format => 'json'}
  end

  resources :bowties, only: [:index]

end
