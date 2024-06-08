# Pedalstart
# Task Management Application

This is a Task Management Application that allows users to manage their tasks. The application includes a front-end interface for viewing, adding, editing, and deleting tasks, as well as a back-end RESTful API to handle the CRUD operations.

## Features

- **Front-end:**
  - Landing page displaying a list of tasks.
  - Ability to add new tasks with a title, description, and due date.
  - View detailed information of each task.
  - Edit existing tasks.
  - Delete tasks.
  - Responsive design for both desktop and mobile devices.

- **Back-end:**
  - RESTful API to handle CRUD operations for tasks.
  - Endpoints for retrieving all tasks, creating a new task, retrieving a task by its ID, updating an existing task, and deleting a task.

## Technologies Used

- **Front-end:**
  - HTML
  - CSS (Bootstrap)
  - JavaScript

- **Back-end:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - CORS
  - Body-parser

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Installation
Install the dependencies:

bash
Copy code
npm install
Start MongoDB:
Ensure MongoDB is running on your machine. If you have MongoDB installed locally, you can start it with:

bash
Copy code
mongod
Run the server:

bash
Copy code
node index.js
The server will start on port 3000.

Open the front-end:
Open task.html in your browser to view the Task Management Application.

API Endpoints
Retrieve All Tasks
URL: /tasks
Method: GET
Description: Retrieve all tasks.
Response:
json
[
  {
    "_id": "60c72b2f4f1a2c6d88f7e7b0",
    "title": "Task 1",
    "description": "Description for Task 1",
    "dueDate": "2024-06-10T00:00:00.000Z"
  },
  ...
]
Create a New Task
URL: /tasks
Method: POST
Description: Create a new task.
Request Body:
json
{
  "title": "New Task",
  "description": "Description for new task",
  "dueDate": "2024-06-15"
}
Response:
json
{
  "_id": "60c72b2f4f1a2c6d88f7e7b0",
  "title": "New Task",
  "description": "Description for new task",
  "dueDate": "2024-06-15T00:00:00.000Z"
}
Retrieve a Single Task by ID
URL: /tasks/:id
Method: GET
Description: Retrieve a single task by its ID.
Response:
json
Copy code
{
  "_id": "60c72b2f4f1a2c6d88f7e7b0",
  "title": "Task 1",
  "description": "Description for Task 1",
  "dueDate": "2024-06-10T00:00:00.000Z"
}
Update an Existing Task
URL: /tasks/:id
Method: PUT
Description: Update an existing task.
Request Body:
json
Copy code
{
  "title": "Updated Task",
  "description": "Updated description",
  "dueDate": "2024-06-20"
}
Response:
json
Copy code
{
  "_id": "60c72b2f4f1a2c6d88f7e7b0",
  "title": "Updated Task",
  "description": "Updated description",
  "dueDate": "2024-06-20T00:00:00.000Z"
}
Delete a Task
URL: /tasks/:id
Method: DELETE
Description: Delete a task.
Response:
json
Copy code
{
  "message": "Task deleted"
}
Usage
Viewing Tasks:

Open task.html in your browser.
The landing page will display a list of all tasks.
Adding a New Task:

Click the "Add Task" button.
Fill in the task details and submit the form.
The new task will be added to the list.
Editing a Task:

Click the "Edit" button next to the task you want to edit.
The task details will be loaded into the form.
Update the details and submit the form.
The task will be updated in the list.
Deleting a Task:

Click the "Delete" button next to the task you want to delete.
The task will be removed from the list.



