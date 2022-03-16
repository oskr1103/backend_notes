import { Sequelize } from "sequelize";

const db = new Sequelize("rehobot_notas", "rehobot_notasUser", "Converse04?", {
  host: "rehobot.co",
  dialect: "mysql",
});

export default db;
