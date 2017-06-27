# Remember that time...

A fun app to display images on an interactive timeline.

## About

This app is a fun little project to learn more about the `electron` + `react` stack. It also uses `flow` and `redux` heavily.

The app is eventually going to have an interactive timeline that runs down the center of the main panel. This timeline will allow users to drag and drop photos from their upload list to the timeline. When they do this they will be prompted for a description and a date.

The app still needs a few things to even be bootstrapped properly.

 - The webpack dev server needs to be changed so `node` modules can be imported to the client modules. Right now the webpack dev server simulates a web server so you can only import libraries you would find on the web. This sucks

 - The webpack build process needs to build sourcemaps (this is easy to do)

 - The main page needs to be styled (IE App global styles)

 - Functionality to display the timeline needs to be added. The timeline components do not exist.

 - The actions needs to be turned into sagas with `redux-sagas`