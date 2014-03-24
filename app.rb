require 'sinatra'
require 'sinatra/reloader'
require "sinatra/content_for"
require 'active_record'

ENV['RACK_ENV'] = "development" if ENV['RACK_ENV'].nil?
ActiveRecord::Base.configurations = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection(ENV['RACK_ENV'])

after do
  ActiveRecord::Base.connection.close
end

class User < ActiveRecord::Base
end

get '/' do
  @say = "Hello World."
  haml :index
end

get '/initializr' do
  erb :initializr
end

get '/words/bless' do
  haml :"words/bless"
end

get '/users' do
  @allusers = User.all
  haml :users
end

post '/users' do
  user = User.new
  user.registration_id = params[:registration_id]
  user.save!
  redirect '/users'
end
