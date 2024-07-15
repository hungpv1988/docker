const express = require('express')
// for express to capture request body
var bodyParser  =  require("body-parser");
const app = express();

// to capture application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// to capture json data (form-data in post man)
app.use(bodyParser.json());

// to capture raw data (in postman)
app.use(bodyParser.raw());

const port = 4000

app.get('/', (request, response) => {
  response.send('Welcome to the best todos list in the world!')
})

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})

app.get("/todos", (request, response) => {
    response.status(200).json(todos);
  });

app.get("/todos/:id", (request, response) => {
    response
      .status(200)
      .json({ data: todos.find((todo) => todo.id === request.params.id) });
  });

app.post("/todos", (request, response) => {
    console.log(request.body);
    todos.push(request.body);
    response.status(201).json({ msg: "Todo created successfully" });
});

app.put("/todos/:id", (request, response) => {
    const todo = todos.find((todo) => todo.id === request.params.id);
    if (todo) {
      const { title, desc, completed } = request.body;
      todo.title = title;
      todo.desc = desc;
      todo.completed = completed;
      response.status(200).json({ msg: "Todo updated successfully" });
      return;
    }
    response.status(404).json({ msg: "Todo not found" });
});

app.delete("/todos/:id", (request, response) => {
    const todoIndex = todos.findIndex((todo) => (todo.id = request.params.id));
    if (todoIndex) {
      todos.splice(todoIndex, 1);
      response.status(200).json({ msg: "Todo deleted successfully" });
    }
    response.status(404).json({ msg: "Todo not found" });
});

const todos = [
    {
      title: "Todo 1",
      desc: "This is my first Todo",
      completed: true,
    },
    {
      title: "Todo 2",
      desc: "This is my second Todo",
      completed: true,
    },
  
    {
      title: "Todo 3",
      desc: "This is my third Todo",
      completed: true,
    },
  
    {
      title: "Todo 4",
      desc: "This is my fourth Todo",
      completed: true,
    },
  
    {
      title: "Todo 5",
      desc: "This is my fifth Todo",
      completed: true,
    },
  ];