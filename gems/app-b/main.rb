# frozen_string_literal: true

# Minimal Ruby application for Dependabot grouped updates testing
# This file exists to make the directory a valid Ruby project

require 'aws-sdk-s3'

puts "App B - AWS SDK S3 version: #{Aws::S3::GEM_VERSION}"
puts "App B - Rails version: #{Rails.version}" if defined?(Rails)
