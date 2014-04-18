require 'sinatra'
require 'sinatra/reloader'
require "sinatra/content_for"
require 'active_record'

ENV['RACK_ENV'] = "development" if ENV['RACK_ENV'].nil?
ActiveRecord::Base.configurations = YAML.load_file('config/database.yml')
ActiveRecord::Base.establish_connection(ENV['RACK_ENV'])
use ActiveRecord::ConnectionAdapters::ConnectionManagement # for Connection Error

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

get '/words/adage' do
  haml :"words/adage"
end

get '/words/images/:file.:ext' do |file, ext|
  content_type ext
  send_file "views/words/images/#{file}.#{ext}"
end

get '/users' do
  @allusers = User.all
  haml :users
end

post '/users' do
  user = User.new
  reg_id = params[:registration_id]
  if reg_id == "clear"
    User.destroy_all
  else
    user.registration_id = reg_id
    user.save!
  end
  redirect '/users'
end
