// const jsonServer = require('json-server')

// const server = jsonServer.create()

// const router = jsonServer.router('db.json')

// const middlewares = jsonServer.defaults()


// server.use(middlewares)
// server.use('/api', router)
// server.listen(process.env.PORT || 5000, () => {
//   console.log('JSON Server is running')
// })

// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running", port);
});