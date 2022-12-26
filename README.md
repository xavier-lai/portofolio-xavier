# portofolio-xavier

React JS App with next JS and animate CSS.

## I - Initialisation

### A) Setup

Make sure you install GIT on your OS.

In Windows10 you must run powershell as admin and change Policy to be able to run script (.exe).

GIT and other packages (node) may not working on VSC. In this case you need to set environment variable Path.

### B) New App

1. install node.js
2. `npm install react`
3. Create a Git project
4. `npx create-react-app my-app`
5. `cd my-app` && `npm start`

## II - Dependencies

Install dependencies with `npm install`.

Bootstrap css:

- react-bootstrap-icons
- react-bootstrap
  ...

## III - Deploy

This app is deployed to github pages. To do this you must install gh-pages. Then add custom script in `package.json`. 

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

`cd my-app && npm run deploy`

Remote App is updated throught Github Ci-Cd. When code is push to branch `main` it will trigger the build that will be stored to branch `gh-pages`. Then the build folder in this branch will be deployed to remote dns.