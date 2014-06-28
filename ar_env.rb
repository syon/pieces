ENV['RACK_ENV'] = "development" if ENV['RACK_ENV'].nil?
puts "ENV['RACK_ENV']: #{ENV['RACK_ENV']}"

ActiveRecord::Base.configurations = YAML.load(ERB.new(File.read('config/database.yml')).result)
ActiveRecord::Base.establish_connection(ENV['RACK_ENV'])
use ActiveRecord::ConnectionAdapters::ConnectionManagement # for Connection Error

class User < ActiveRecord::Base
end

class Ff7Character < ActiveRecord::Base
  has_one :ff7_status
end

class Ff7Status < ActiveRecord::Base
  belongs_to :ff7_character
end
