'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/db.config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== basename && file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

//   db.User = require("./users.model")(sequelize,Sequelize)
//   db.Lines = require("./lines.model")(sequelize,Sequelize)
//   db.Schedule = require("./schedule.model")(sequelize,Sequelize)
//   db.BusStop = require("./busStop.model")(sequelize,Sequelize)
  
//line has one schedule
// db.Lines.hasMany(db.Schedule,{foreignKey:'idLine'})
// db.Lines.hasMany(db.BusStop,{foreignKey:'idLine'})

//  db.Schedule.belongsTo(db.Lines, {
//   foreignKey: "idLine",
//  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  
  module.exports = db;