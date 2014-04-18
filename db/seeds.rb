# coding: utf-8
require "csv"

puts "===== db/seeds.rb START ====="
puts "ENV['RACK_ENV']: #{ENV['RACK_ENV']}"

User.delete_all
(1..20).each do |num|
  User.create(:registration_id => "seed data #{num}")
end

puts "===== db/seeds.rb  END  ====="
