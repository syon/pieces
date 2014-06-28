require 'sinatra'
require 'sinatra/reloader'
require "sinatra/content_for"
require 'active_record'
require './app'
require './ar_env'

run Sinatra::Application
