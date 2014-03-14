require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @say = "Hello World."
  haml :index
end

get '/initializr' do
  erb :initializr
end
