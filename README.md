# FIRE-website
The official website of FIRE+

Should be able to access the website on react's localhost by using create-react-app 
All the libraries should already be installed in the node_modules folder.

run the app: 
# npm start

## Helpful Tips

```node_modules``` folder not exist?
```
npm config set legacy-peer-deps true
npm i
```

Issue Solved: Circular dependencies is occured in shelljs due to shelljs's bug. Solve by running the prompt to update all dependencies inlcuding shelljs:
```
npm i -g npm-check-updates
ncu -u
npm install
```
