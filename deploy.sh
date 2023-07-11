#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'myDeploy'

# ssh-keyscan -H "github.com"


# git remote add origin git@github.com:immanuelsindu/immanuelsindu.github.io.git  
# git push git@github.com:immanuelsindu/immanuelsindu.github.io.git 

git remote add origin https://github.com/immanuelsindu/immanuelsindu.github.io.git
git push -u origin master
# if you are deploying to https://<USERNAME>.github.io


cd -