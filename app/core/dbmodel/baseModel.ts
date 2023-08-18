import Sequelize from "sequelize";
import { database } from "../config";

export const baseModel = database.define("base", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  uid: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4 },
});

