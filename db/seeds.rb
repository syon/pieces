# coding: utf-8
require "csv"

puts "===== db/seeds.rb START ====="
puts "ENV['RACK_ENV']: #{ENV['RACK_ENV']}"

User.delete_all
(1..20).each do |num|
  User.create(:registration_id => "seed data #{num}")
end

Ff7Character.delete_all
(1..20).each do |num|
  Ff7Character.create(
    :name => "Name-#{num}",
    :lv => rand(100),
    :hp => rand(10000),
    :mp => rand(1000),
  )
end

Ff7Status.delete_all
(1..20).each do |num|
  Ff7Status.create(
    :ff7_character_id => num,
    :str => rand(256),
    :dex => rand(256),
    :vit => rand(256),
    :mgc => rand(256),
    :spi => rand(256),
    :luc => rand(256),
    :atk => rand(256),
    :atk_p => rand(256),
    :def => rand(256),
    :def_p => rand(256),
    :mgc_atk => rand(256),
    :mgc_def => rand(256),
    :mgc_def_p => rand(256)
  )
end

puts "===== db/seeds.rb  END  ====="
