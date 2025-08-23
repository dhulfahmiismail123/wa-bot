// src/server.js
import express from 'express';
import { port_server, server_path } from './config.js';

const app = express();

app.use(express.static(server_path));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port_server}`);
});