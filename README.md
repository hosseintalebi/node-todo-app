# node-todo-app

Backend APIs for todo app using Node, MongoDB, and Mongoose.

## How To Use

Use this heroku app for acessing the endpoints:
https://fast-depths-86514.herokuapp.com/

## Model

```javascript
text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  }
```

## Endpoints

### GET

**/todos** returns all the todos in the database.
**/todos/:id** fetches a todo using the todo id.

### POST

**/todos** creates a new todo on the server. You should provide `text` in the payload (body) of the request.

### DELETE

**/todos/:id** removes a todo from the server. You should provide the id of todo.

### PATCH

**/todos/:id** update a todo on the server. You should provide the id of todo.
