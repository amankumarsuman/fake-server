const data=require("./db.json");

const jsonServer=require("json-server");

const server=jsonServer.create();
const router=jsonServer.router(data);
const middleware=jsonServer.defaults();
const port =process.env.PORT || 3005;
server.use(middleware);
server.use(router);

server.listen(port)