require 'sinatra'
require 'json'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  username, password = File.read('user.txt').split('|')

  erb :index, :locals => {:username => username, :password => password}
end

post '/' do
  username = params["username"]
  password = params["password"]

  puts "username: #{username}\npassword: #{password}"
end

post '/cache/user_registration' do
  request.body.rewind

  cache = JSON.parse(request.body.read)
  username = cache["username"]
  password = cache["password"]

  File.write('user.txt', "#{username}|#{password}")
end
