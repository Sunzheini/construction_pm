# Construction Project Manager


## Created with electron.js

## Creation steps
1. used PyCharm IDE
2. new node.js project
3. npm install electron --save-dev
4. create file main.js
5. new configuration -> npm -> rename to start -> select start from dropdown
6. "main": "main.js",
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "electron ."
    },
7. npm start (will execute main.js)

## Packaging
In terminal first install: `npm install -g electron-packager`
Then package: `electron-packager . 9_man_morris_electron --platform=win32 --arch=x64 --electron-version=28.1.1`
