const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './db.sqlite' });

const Reserva = sequelize.define('Reserva', {
  nombreSala: { type: DataTypes.STRING, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
});

sequelize.sync();

module.exports = { Reserva, sequelize };
