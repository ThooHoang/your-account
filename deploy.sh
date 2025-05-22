#!/bin/bash

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Create a .nojekyll file to bypass GitHub Pages processing
touch .nojekyll

# Create a simple script for SPA routing
cat > 404.html << EOL
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    window.location.href = '/your-account/';
  </script>
</head>
<body>
  Redirecting...
</body>
</html>
EOL

# If you're not using git push for deploy, you can uncomment the following lines
# git init
# git add -A
# git commit -m 'Deploy to GitHub Pages'
# git push -f git@github.com:yourusername/your-account.git main:gh-pages

echo "Build complete and ready for deployment"
