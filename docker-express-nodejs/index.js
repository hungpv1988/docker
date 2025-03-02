const express = require('express')
// for express to capture request body
var bodyParser  =  require("body-parser");
const os = require('os');
const app = express();

// to capture application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// to capture json data 
app.use(bodyParser.json());
;
// to capture raw data (in postman)
app.use(bodyParser.raw());

const port = 8999;

app.get('/', (request, response) => {
  //response.send('Welcome to the best todos list in the world! at ');
  response.json({
      serviceName: 'hungpv1988',
      contact: "hungpv1988@gmail.com",
      clientIp:  request.header('x-forwared-for'),
      containerIp: request.socket.localAddress,
      containerName: os.hostname(),
      elbIP: request.socket.remoteAddress
    }
  )
})

app.get('/ping', (request, response) => {
  response.json({
      message: 'service runs well'
    }
  )
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