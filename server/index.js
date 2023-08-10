const express = require("express");
const server = express();
const {BookRoutes,UserRoutes,ReservationRoutes} = require("../routers");
//const cors = require("cors");

//MIDDELWARE
server.use(express.json());
//server.use(cors());
//fin

server.use("/users",UserRoutes);
server.use("/books",BookRoutes);
server.use("/reservations",ReservationRoutes);



module.exports = server;