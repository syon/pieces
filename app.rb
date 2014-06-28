# coding: utf-8
require 'thinreports'

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

get '/ff7status' do
  chara_id = params[:chara_id] ||= 1
  @ff7status = Ff7Status.find(chara_id)
  haml :ff7status
end

get '/yontaku/:qid' do |qid|
  @qid = qid
  @chosen_ans = nil
  @correct_ans = nil
  haml :yontaku
end

post '/yontaku/:qid' do |qid|
  @qid = qid
  @chosen_ans = params[:yontaku]
  @correct_ans = "ans3"
  @correct_kigo = "ウ"
  haml :yontaku
end

get '/thinreports' do
  haml :thinreports
end

post '/thinreports' do
  content_type 'application/pdf'
  your_msg = params[:your_msg]
  report = ThinReports::Report.new :layout => 'tlf/hello_world'
  report.start_new_page
  report.page.item(:world).value(your_msg)
  report.page.item(:thinreports).value('ThinReports')
  report.generate_file('hello_world.pdf')
  send_file 'hello_world.pdf'
end
