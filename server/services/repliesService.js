import Repliesmodel from "../db/index";
import BaseService from "./baseService.js";

const { Replies } = Repliesmodel;

/**
 * @class Replieservice
 */
export default class RepliesService extends BaseService {
  /**
   * @constructor
   */
  constructor(Replies) {
    super(Replies);
    this.Replies = Replies;
  }

  /**
   * @method createReplies
   * @description
   * @param {number} commentId
   * @param {string} body
   * @param {number} UserId
   * @returns {object} created object
   */
  async createReplies(commentId, body, userId) {
    const data = await Replies.create({
      commentId,
      body,
      userId,
    });
    return data;
  }
}

export const repliesService = new RepliesService();
