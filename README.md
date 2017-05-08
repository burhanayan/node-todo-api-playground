# node-todo-api-playground

This repository is built to CRUD*(create, read, update, and delete)* to-do records in Node.js with express, mongodb and mongoose.

For tests expect, mocha, supertest libraries are used.

### Fetch Todo's
**GET** *https://afternoon-meadow-65589.herokuapp.com/todos* URL

### Get a Todo by Id
**GET** *https://afternoon-meadow-65589.herokuapp.com/todos/:id* URL

### Add Todo
**POST** *https://afternoon-meadow-65589.herokuapp.com/todos* URL with JSON body below
```
{"text": "Something to do from Postman"}
```

### Delete a Todo by Id
**DELETE** *https://afternoon-meadow-65589.herokuapp.com/todos/:id* URL
