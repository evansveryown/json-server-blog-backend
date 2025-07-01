const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './' // prevents error by not pointing to non-existent /public
});

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 10000, () => {
  console.log('JSON Server is running...');
});
