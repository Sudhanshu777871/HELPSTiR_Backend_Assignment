# Todo List Application

## Overview
This is a Todo List application built with Node.js and Express.js. It allows users to manage a list of tasks with features to add, update, delete, and mark tasks as done. The data is stored in a JSON file on the filesystem.

## API Endpoints
- `GET /todos`: Retrieve the list of todos.
- `POST /todos`: Add a new todo.
- `PUT /todos/:id`: Update an existing todo.
- `DELETE /todos/:id`: Delete a todo.
- `PATCH /todos/:id/done`: Mark a todo as completed.

## Implementation
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for handling API routes.
- **uuid**: Library to generate unique IDs for todos.
- **fs**: Node.js module for interacting with the filesystem.

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/Sudhanshu777871/HELPSTiR_Backend_Assignment.git
   cd HELPSTiR_Backend_Assignment
2. Install dependencies:
   npm install

3. Start the application:
   npm start

4. Use a tool like Postman to interact with the API endpoints.
