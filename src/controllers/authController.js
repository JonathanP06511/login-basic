const UserModel = require('../models/userModel');
const console = require('console');


class AuthController {
  static async login(req, res) {
    const { username, password } = req.body;
    console.log('Nombre de usuario ingresado:', username);
    console.log('Contraseña ingresada:', password);

    try {
      const user = await UserModel.findOne(username);
      console.log('Usuario encontrado en la base de datos:', user);

      if (!user || user.password !== password) {
        const allUsers = await UserModel.findAll();
        console.log('Lista de todos los usuarios:', allUsers);
        return res.status(401).json({ error: 'Credenciales incorrectas', users: allUsers });
      }

      return res.status(200).json({ message: 'Login exitoso' });
    } catch (error) {
      console.error('Error al buscar usuario en la base de datos:', error);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
  }
}

module.exports = AuthController;
