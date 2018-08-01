#base
set :application, 'tekubu'
set :repo_url, 'git@github.com:fab-team/tekubu.net.git'
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/var/www/tekubu.net/tekubu'
set :rails_env, 'production'
set :scm, :git
set :stage, :production
# set :format, :pretty
# set :log_level, :debug
# set :pty, true

set :rbenv_roles, :all

# set :linked_files, %w{config/database.yml}
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')
# set :linked_dirs, fetch(:linked_dirs, []).push('log')

set :unicorn_pid, "/var/www/tekubu.net/tekubu/tmp/unicorn_tekubu.pid"
set :unicorn_config_path, "/var/www/tekubu.net/tekubu/config/unicorn.rb"
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
set :keep_releases, 3

# namespace :deploy do
#   desc 'Restart application'
#   task :restart do
#     on roles(:app), in: :sequence, wait: 5 do
#       # Your restart mechanism here, for example:
#       # execute :touch, release_path.join('tmp/restart.txt')
#       invoke 'unicorn:restart'
#     end
#   end

#   after :restart, :clear_cache do
#     on roles(:web), in: :groups, limit: 3, wait: 10 do
#       # Here we can do anything such as:
#       # within release_path do
#       #   execute :rake, 'cache:clear'
#       # end
#     end
#   end

#   after :finishing, 'deploy:cleanup', 'deploy:restart'

# end

namespace :deploy do
  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end
end

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end