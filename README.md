### Helpful Links

> [Add react to a website](https://reactjs.org/docs/add-react-to-a-website.html)

> I didn't mention index.js in any script tag in index.html. But how it is referencing the root div element in index.html <br> > [Answer One](https://stackoverflow.com/questions/42438171/wheres-the-connection-between-index-html-and-index-js-in-a-create-react-app-app)<br> > [Answer Two](https://stackoverflow.com/questions/41738421/how-react-js-index-js-file-contacting-index-html-for-id-references)

> Can i use arrow-functions to export.<br>
> The answer is Yes, and you can do it [two ways](https://stackoverflow.com/questions/36458697/is-it-possible-to-export-arrow-functions-in-es6-7)

### Helpful scripts

- check react version - ```npm view react version```

- update npm - ```npm install -g npm```

- update to [React 18](https://javascript.works-hub.com/learn/react-18-is-here-whats-new-9b46a) - ```npm install react@alpha react-dom@alpha```

- [login to github in command-line using personal-access-token](https://stackoverflow.com/questions/66231282/how-to-add-github-personal-access-token-to-visual-studio-code)

  ```
  git remote set-url origin https://<username>:<personal-access-token>@github.com/<username>/<repository-name>.git
  ```
  
- [change git repository name locally](https://www.codepoc.io/blog/git/5617/change-git-repository-name-locally)

  ```
  cd projectFolder
  git remote -v (it will show previous git url)
  git remote set-url origin https://username@bitbucket.org/username/newName.git
  git remote -v (double check, it will show new git url)
  git push (do whatever you want.)
  ```

- [open a file in current vscode using terminal](https://stackoverflow.com/questions/41377489/how-to-open-a-file-from-the-integrated-terminal-in-visual-studio-code)

  code -r filename.js

- [Switch Terminals in vscode-terminal](https://stackoverflow.com/questions/48440673/how-to-switch-between-terminals-in-visual-studio-code/64250667)

  ```
  Toggle between terminal and editor focus
      "ctrl+`
  Move to previous terminal
      Ctrl+PageUp (macOS Cmd+Shift+])
  Move to next terminal
      Ctrl+PageDown (macOS Cmd+shift+[)
  ```

- [vscode not recognizing react code as react javascript instead it format it as vanilla javascript](https://stackoverflow.com/questions/54462519/why-vscode-is-not-recognizing-react-code-as-react-javascript-instead-it-format-i)

  I don't read anything about react in prettier documentation

  As far as I understand, react code should be put in .jsx files, not .js

  https://reactjs.org/docs/introducing-jsx.html

  > React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code

  Also I did [this](https://www.reddit.com/r/vscode/comments/8h2vyt/auto_detect_language_mode_for_react_files/)

  You can use the "files.associations" option to make it so that all JS files are JavaScript React.

        "files.associations": {
            "*.jsx": "javascriptreact"
        }

### Timeline

- [x] setup react-app

  - [x] intialised a app using [create-react-app](https://github.com/facebook/create-react-app#create-react-app--)  
         `npx create-react-app <app-name>`
  - [x] nested into the app  
         `cd <app-name>`
  - [x] run server  
         `npm start`

- [x] Updated to React 18
- [x] Removed Clutter
- [x] Understood JSX
- [x] Made first component
- [x] Used Props
  - [x] passed props using static way (hard-coded)
  - [x] passed props using dynamic way (probably from API using `map`)
- [x] Used keys and understood it's <a href="https://reactjs.org/docs/lists-and-keys.html#keys" title="Keys help React identify which items have changed, are added, or are removed">importance</a>
- [x] <a href="https://reactjs.org/docs/typechecking-with-proptypes.html" title="PropTypes exports a range of validators that can be used to make sure the data you receive is valid">PropTypes</a>

  - [x] installed :  
         `npm i prop-types`
  - [x] imported :  
         `import PropTypes from 'prop-types'`
  - [x] used :

  ```js
  <Component-name>.propTypes = {
    //syntax :
    <prop-name>: PropTypes.<prop-type>.(?isRequired),

    //example :
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }
  ```
- [x] Conditional Rendering
- [x] DOM Events
- [X] State in React (using [counter](https://reactjs.org/docs/hooks-state.html) example)
- [x] useState

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
