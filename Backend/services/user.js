const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function create(user) {
    const result = await db.query(
      `INSERT INTO User 
      (username, password) 
      VALUES 
      ("${user.username}", ${user.password})`
    );
  
    let message = "Error in creating user";
  
    if (result.affectedRows) {
      message = "usercreated successfully";
    }
  
    return { message };
  }

  module.exports = {
    create
  };
  