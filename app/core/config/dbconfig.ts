import { Sequelize } from "sequelize";

export const database = new Sequelize(
  // 'database', 'username', 'password', 
  {
    dialect: "sqlite",
    storage: "./dev.db",
    logging: false,
  }
);

