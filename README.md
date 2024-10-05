# API Chaining Dashboard
This project is a responsive web application that demonstrates the ability to handle complex API interactions, including both GET and POST requests. The dashboard chains multiple API calls together, where the response from one API is used as a parameter or in the request body of subsequent API requests. This project showcases proficiency in asynchronous operations, state management, and data transformation.

## Table of Contents
Tech Stack
APIs Used
Features
Setup Instructions
How to Run the Application
Application Workflow
Error Handling


## Tech Stack
React.js: JavaScript library for building user interfaces.

Tailwind CSS: Utility-first CSS framework for styling the app.

Axios: HTTP client for API calls.

Git: Version control for managing code.

REST API: Integration of APIs to demonstrate API chaining.


## APIs Used
### Get Users List
### Endpoint: GET https://jsonplaceholder.typicode.com/users
### Response: An array of user objects containing id, name, and email.

### Create New Post
### Endpoint: POST https://jsonplaceholder.typicode.com/posts
### Request Body:

json

Copy code

{
  "title": "string",
  
  "body": "string",
  
  "userId": "number"
  
}

Response: The created post object with id, title, body, and userId.

### Get Comments by Post
### Endpoint: GET https://jsonplaceholder.typicode.com/comments?postId={postId}
### Required Parameter: postId
### Response: An array of comment objects.


## Features
API Chaining: Chains multiple API calls where data from one API is used in subsequent requests.

Responsive UI: Tailwind CSS ensures the dashboard is responsive across devices.

User-Friendly Interface: Allows users to select a user, create a post, and view comments for that post.

State Management: Managed via React's useState and useEffect hooks.

Loading and Error Handling: Displays loading indicators and handles errors gracefully.


## Setup Instructions
Clone the repository:
bash

Copy code
git clone <repository-url>

Navigate to the project directory:

bash
Copy code
cd api-chaining-dashboard

Install dependencies:

bash
Copy code
npm install

Start the application:

bash
Copy code

npm start


## How to Run the Application
### Start the development server: After running npm start, the React app will be served at http://localhost:3000.

### Select a user: The app will display a dropdown of users fetched from the Get Users List API. Choose a user to proceed.

### Create a post:

Input the title and body of the post.

Select the user for whom the post will be created.

Submit the form to trigger the Create New Post API.

Fetch comments:

Upon successful post creation, the Get Comments by Post API will fetch comments for the newly created post.
Comments will be displayed under the submitted post.


## Application Workflow
Select User: Choose a user from the dropdown fetched via the GET /users API.

Create Post: Enter post details and submit, triggering the POST /posts API.

Fetch Comments: After the post is created, fetch comments for that post using the GET /comments?postId={postId} API.


## Error Handling
API Errors: Any API errors (e.g., network failures) are logged in the console and can be further extended to display user-friendly error messages.

Loading States: A loading state is displayed when API requests are in progress, ensuring the user is aware of ongoing processes.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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


