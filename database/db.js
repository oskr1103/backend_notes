import { Sequelize } from "sequelize";

const db = new Sequelize("rehobot_notas", "rehobot_notasUser", "Converse04?", {
  host: "190.8.176.248",
  dialect: "mysql",
  port: 3306,
});

export default db;
