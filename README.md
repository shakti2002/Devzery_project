### API Chaining Dashboard
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
# Get Users List
# Endpoint: GET https://jsonplaceholder.typicode.com/users
# Response: An array of user objects containing id, name, and email.

# Create New Post
# Endpoint: POST https://jsonplaceholder.typicode.com/posts
# Request Body:

json
Copy code
{
  "title": "string",
  "body": "string",
  "userId": "number"
}
Response: The created post object with id, title, body, and userId.

# Get Comments by Post
# Endpoint: GET https://jsonplaceholder.typicode.com/comments?postId={postId}
# Required Parameter: postId
# Response: An array of comment objects.


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
# Start the development server: After running npm start, the React app will be served at http://localhost:3000.

# Select a user: The app will display a dropdown of users fetched from the Get Users List API. Choose a user to proceed.

# Create a post:

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
