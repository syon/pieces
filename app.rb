require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ENV['RACK_ENV'] = "development" if ENV['RACK_ENV'] == nil
ActiveRecord::Base.configurations = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection(ENV['RACK_ENV'])

class User < ActiveRecord::Base
end

get '/' do
  @say = "Hello World."
  @allusers = User.all.to_json
  haml :index
end

post '/' do
  user = User.new
  user.registration_id = params[:registration_id]
  user.save!
  status 202
  redirect '/'
end

get '/initializr' do
  erb :initializr
end

get '/words/bless' do
  haml :"words/bless"
end
