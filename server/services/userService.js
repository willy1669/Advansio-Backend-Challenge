import Usermodel from "../db/index";
import BaseService from "./baseService.js";

const { User } = Usermodel;

/**
 * @class UserService
 */
export default class UserService extends BaseService {
  /**
   * @constructor
   */
  constructor(User) {
    super(User);
    this.User = User;
  }

  /**
   * @method createUser
   * @description
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {object} created object
   */
  async createUser(email, password) {
    const data = User.create({
      email,
      password
    });
    return data;
  }

  /**
   * @method findOneEmail
   * @param {object} email
   * @returns {Array} result
   */
  async findOneEmail(email) {
    const result = User.findOne({
      where: {
        email: email,
      },
    });
    return result;
  }
}

export const userService = new UserService();
