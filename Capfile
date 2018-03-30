# Load DSL and set up stages
require "capistrano/setup"


# Include default deployment tasks
require "capistrano/deploy"

require 'capistrano/rbenv'
require 'capistrano/bundler'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'
# Load the SCM plugin appropriate to your project:
#
# require "capistrano/scm/hg"
# install_plugin Capistrano::SCM::Hg
# or
# require "capistrano/scm/svn"
# install_plugin Capistrano::SCM::Svn
# or
#require "capistrano/scm/git"
#install_plugin Capistrano::SCM::Git

# Include tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails
#   https://github.com/capistrano/passenger
#
# require "capistrano/rvm"
# require "capistrano/rbenv"
# require "capistrano/chruby"
# require "capistrano/bundler"
# require "capistrano/rails/assets"
# require "capistrano/rails/migrations"
# require "capistrano/passenger"

#require 'capistrano/nodenv'

#set :nodenv_type, :user # or :system, depends on your nodenv setup
#set :nodenv_node, '0.10.3'
#set :nodenv_prefix, "NODENV_ROOT=#{fetch(:nodenv_path)} NODENV_VERSION=#{fetch(:nodenv_node)} #{fetch(:nodenv_path)}/bin/nodenv exec"
#set :nodenv_map_bins, %w{node npm}
#set :nodenv_roles, :all # default value

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rb").each { |r| import r }
