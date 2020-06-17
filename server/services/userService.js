import  { user } from '../db/models/user.js';

import BaseService from './baseService.js';

/**
 * @class UserService
 */
export default class UserService extends BaseService {
  /**
   * @constructor
   */
  constructor() {
    super(user);
  }
}

export const userService = new UserService();
