import app from "./app/app.js";

import http from 'http';

//Creating the server
const PORT = process.env.PORT || 5000
const server = http.createServer(app);
server.listen(PORT, console.log(`server is up and running in port ${PORT}`));