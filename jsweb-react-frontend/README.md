# Front End

## Running

Sequence of commands to run when starting up the project

1. Open terminal in VS Code/Command Prompt
2. Activate Virtual Environment

         conda activate PersonalWebsite
3. Navigate to Project folder `C:\Users\User\source\repos\PersonalWebsite`
4. Navigate inside react folder

        cd jsweb-react-frontend
5. Run React App

        nmp start

## Deploy

Thanks to gh pages in numpy, we can build and deploy the app with a quick terminal command.
This builds the app, and deploys it to the gh-pages branch.

Run via the following command:

        npm run deploy

## Installation and Setup

The following frameworks and ecosystems are needed for this project:

- anaconda
- numpy
- material UI
- react app
- gh pages
- fullpage.js

The end goal is to have material UI and react app installed. Both of these components require using numpy to install them. Numpy, and other relevant frameworks and installed and managed by anaconda

### - Anaconda

1. Go to <https://www.anaconda.com/>
2. Download and Install Anaconda
3. Create a separate virtual environment for anaconda install (i.e. 'Personal Website')
4. Add node.js to environment packages

### - Numpy

1. Open the command prompt
2. (Optional) Use the following command to validate the virtual environment has been properly created"

        conda info --envs

3. Active the virtual environment:

        conda activate [environment name]
4. Install numpy with the following command:

        conda install numpy

### - React and Material UI

1. Open command prompt and activate anaconda environment.
2. Navigate to the repo folder in command prompt
3. Run

        npx create-react-app my-app --template typescript

4. Run:

        npm install react react-dom
5. Run:

        npm install @mui/material @emotion/react @emotion/styled

*Refer to the following resources for additional guidance and context:*

- [react app install via vscode](<https://code.visualstudio.com/docs/nodejs/reactjs-tutorial>)
- [material ui installation](https://mui.com/material-ui/getting-started/installation/)
- [numpy installation](<https://numpy.org/install/>)

### GH Pages

We use GH Pages to build and deploy our app to gh-pages.
Refer to this URL for more info:
[Deploying React apps to github pages](https://blog.logrocket.com/deploying-react-apps-github-pages/)

1. Run:

        npm install gh-pages --save-dev
2. Open package.json
3. Inside the `scripts` section, add the following:

        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d build",

4. Deploy the app by running:

        npm run deploy
5. Open Github
6. Navigate to settings>pages for the repo

## Reference

### NumPy Commands

`npm start`

- Starts the development server.

`npm run build`

- Bundles the app into static files for production.

`npm test`

- Starts the test runner.

`npm run eject`

- Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
