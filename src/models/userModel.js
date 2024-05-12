const pool = require('../config/dbConfig');

class UserModel {
  static async findOne(username) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM usuarios WHERE username = ?', [username], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]); // Devuelve el primer resultado encontrado
        }
      });
    });
  }

  static async findAll() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results); // Devuelve todos los resultados
        }
      });
    });
  }
}

module.exports = UserModel;

