import express from "express";
import bodyParser from "body-parser";
// @ts-ignore
import { RegisterRoutes } from "./routes/routes";
import {RedisConfiguration} from "./configure/RedisConfiguration"

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const redisConfiguration = new RedisConfiguration();

export function getConfiguration(): RedisConfiguration{
  return redisConfiguration;
}

RegisterRoutes(app);