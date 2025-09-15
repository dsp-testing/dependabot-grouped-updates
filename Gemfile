# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.1.0'

# Vite-related gems (for multi-ecosystem group testing)
gem 'vite_rails', '~> 3.0'
gem 'vite_ruby', '~> 3.0'

# AWS-related gems (for bundler group testing)
gem 'aws-sdk-core', '~> 3.0'
gem 'aws-sdk-s3', '~> 1.0'
gem 'aws-partitions', '~> 1.0'

# Other common gems
gem 'rails', '~> 7.0.0'
gem 'pg', '~> 1.1'
gem 'puma', '~> 7.0'
gem 'bootsnap', '>= 1.4.4', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 6.0'
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'spring'
end