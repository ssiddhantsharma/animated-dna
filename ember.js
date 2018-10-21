
# We support all major Node.js versions. Please see our documentation for a full list.
# https://documentation.codeship.com/basic/languages-frameworks/nodejs/
#
# By default we use the Node.js version specified in your package.json file and fall
# back to the latest version from the 0.10 release branch.
#
# You can use nvm to install any Node.js version you require
#nvm install 0.10
npm install
npm install -g bower
# or, if you prefer to use yarn
#yarn install
#yarn global add bower --prefix "${HOME}"
bower install
