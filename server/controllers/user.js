import authHelper from '../helpers/auth.js';
import { userService } from '../services/userService.js';
import { createName } from '../helpers/nameFormatter.js';

/**
 * @class UserController
 */
export default class UserController {
  /**
   * @method register
   * @description registers a new user with their email, password and meterNumber
   * @param {*} req
   * @param {*} res
   * @returns {object} registered user
   */
  static async register(req, res) {
    const { email, password } = req.body;

    //generate name from email 
    const name = createName(email);
    
    //create user and add to database
    const user = await userService.create({ email, password, name });

    return res.status(200).json({
      status: true,
      message: 'user created successfully',
      user,
    });
  }

  /**
   * @method login
   * @description login a user with their email and password
   * @param {*} req
   * @param {*} res
   * @returns {object} logged in user
   */
  static async login(req, res) {
    const { password } = req.body;
    const {
      user,
      user: { _id, email, password: hashedPassword },
    } = req;

    //compare password
    const verifiedPassword = authHelper.comparePassword(
      hashedPassword,
      password
    );

    if (!verifiedPassword) {
      return res.status(401).send({
        status: false,
        error: 'Bad Login',
      });
    }

    //create token
    const token = authHelper.encode({ _id, email });

    return res.status(200).json({
      status: true,
      message: 'Login successful',
      token,
      user,
    });
  }
}
