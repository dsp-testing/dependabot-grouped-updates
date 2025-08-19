# Dependabot Test Project

This is a minimal project created to test the dependabot configuration in `.github/dependabot.yml`.

## Structure

The project includes manifests for multiple package ecosystems:

### npm (JavaScript/Node.js)
- `package.json` - Contains dependencies including:
  - `vite*` packages (for multi-ecosystem group testing)
  - Other common JavaScript dependencies

### Bundler (Ruby)  
- `Gemfile` - Contains dependencies including:
  - `vite*` gems (for multi-ecosystem group testing)
  - `aws*` gems (for bundler group testing)
  - Other common Ruby/Rails dependencies

## Dependabot Configuration

The `.github/dependabot.yml` file is configured to test:

1. **Multi-ecosystem groups**: The "vite" group spans both npm and bundler ecosystems
2. **Regular groups**: The "aws" group for bundler dependencies  
3. **Pattern matching**: Dependencies matching `vite*` and `aws*` patterns
4. **Scheduling**: Monthly intervals for dependency updates

## Testing

This setup allows dependabot to:
- Create grouped PRs for vite-related dependencies across both ecosystems
- Create grouped PRs for AWS-related Ruby gems
- Create individual PRs for other dependencies based on the monthly schedule

## Usage

1. Install dependencies:
   ```bash
   npm install
   bundle install
   ```

2. Run the Node.js server:
   ```bash
   npm start
   # or
   node index.js
   ```

3. Build with Vite:
   ```bash
   npm run build
   ```