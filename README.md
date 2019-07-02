### Run 'npm init' then 'npm install' and finally 'npm start' to view this applciation on localhost://3000

### Recap of exercise intructions:

MAIN EXERCISE (to be done at home in free time):
• Use React for this exercise.
• Host this small app somewhere so we do not need to do any setup to try what
you built
• Please send us a way to view the code (Github or ZIP).
Create a responsive app with the following requirements:

1. Clickable text field (calendar opens automatically with the possibility to select a
   date range)
2. Either a button to submit the new date range, or automatically detect when there
   is a change and go to step 3
3. Display in a box below the text field:
   a. Number of days between the date range
   b. Is the start date and/or end date part of a leap year?
   c. Number of Mondays in this date range
   d. “What happened on this day” fact from the Numbers API (choose
   the start date from the range):
   For instance, http://numbersapi.com/9/14/date will return the following:
   September 14th is the day in 1901 that President of the United States
   William McKinley dies after an assassination at

### Notes to reviewers:

I used Moment.js with popular npm module 'react-dates' provided by Airbnb to create the Date Range Picker, making some small changes to the default design and parameters.

Full Moment.js Documentation here:

https://momentjs.com/docs/

Moment.js Date formatting documented here:
https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/

Airbnb 'react-dates' Repo (for Date Range Picker):

https://github.com/airbnb/react-dates

I used the npm module 'styled-components' to create a simple, esily edidable and exportable list of Static and Pure Components.

Styled Components Homepage:

https://www.styled-components.com/

NOTE: For a more extensive app, I would have created sub-folders for each component, containing js, css and tests per component. However, with such a small SPA application, I felt this was overkill, so simply exported each styled component out of 'CommonElements.js' ready for importing into 'HomePage.js'.

Finally, I used the Promise Based Http Client 'axios' to call the 'numbersapi.com' Endpoint
(Example format: http://numbersapi.com/9/14/date ) into the application. I use axios, as it is supported across all versions of modern browsers:

Axios npm package page:
https://www.npmjs.com/package/axios

###

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
