# JoshsWebsite

Repository for my personal website.

## Project Overview

A static website designed to be a place for me to host my game/tv tracker and also be my portfolio.

### Structure

Made up of 3 components:

- front end | written in react | hosted in ????
- back end | written in ???? | hosted in ????
- database | written in ???? | hosted in ????

### Features, Planning, and To-Do

Refer to the github projects to track progress:

- <https://github.com/users/JoshStevens56/projects/1/views/1>

## Front End

### Running

Sequence of commands to run when starting up the project

1. Open terminal in VsCode/Command Prompt
2. Activate Virtual Environment | `conda activate PersonalWebsite`
3. Navigate to Project folder | `C:\Users\User\source\repos\PersonalWebsite`
4. Navigate inside react folder | `*\joshswebsite_react`
5. Run React App | `nmp start`

### Installation

The following frameworks and ecosystems are needed for this project:

- anaconda
- numpy
- material UI
- react app

The end goal is to have material UI and react app installed. Both of these components require using numpy to install them. Numpy, and other relevant frameworks and installed and managed by anaconda

#### Install and Setup Anaconda

1. Go to <https://www.anaconda.com/>
2. Download and Install Anaconda
3. Create a separate virtual environment for anaconda install (i.e. 'Personal Website')
4. Add node.js to environment packages

#### Install Numpy

1. Open the command prompt
2. (Optional) Use the following command to validate the virtual environment has been properly created"

        conda info --envs

3. Active the virtual environment:

        conda activate [environment name]
4. Install numpy with the following command:

        conda install numpy

#### Install React and Material UI

1. Open command prompt and activate anaconda environment.
2. Run:

        npm install react
3. Run:

        npm install react react-dom
4. Run:

        npm install @mui/material @emotion/react @emotion/styled`
5. Navigate to the repo folder in command prompt
6. Run

        npx create-react-app [project-name]

*Refer to the following resources for additional guidance and context:*

- [react app install via vscode](<https://code.visualstudio.com/docs/nodejs/reactjs-tutorial>)
- [material ui installation](https://mui.com/material-ui/getting-started/installation/)
- [numpy installation](<https://numpy.org/install/>)

## Command Reference

`npm start`

- Starts the development server.

`npm run build`

- Bundles the app into static files for production.

`npm test`

- Starts the test runner.

`npm run eject`

- Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!
