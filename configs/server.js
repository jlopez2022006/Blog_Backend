"use strict";

import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnection } from "./mongo.js";
import projectRoutes from "../src/projects/project.routes.js";
import commentsRoutes from "../src/comments/comment.routes.js";


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.projectPath = '/blog/v1/projects'
    this.commentsPath = '/blog/v1/comments'

    this.middlewares();
    this.connectDB();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.projectPath, projectRoutes);
    this.app.use(this.commentsPath, commentsRoutes);

  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port ", this.port);
    });
  }


}

export default Server;