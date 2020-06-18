import Repliesmodel from "../db/index";
import Commentmodel from "../db/index";
import BaseService from "./baseService.js";

const { Comment } = Commentmodel;
const { Replies } = Repliesmodel;

/**
 * @class CommentService
 */
export default class CommentService extends BaseService {
  /**
   * @constructor
   */
  constructor(Comment) {
    super(Comment);
    this.Comment = Comment
  }

  /**
   * @method createComment
   * @description
   * @param {string} twit
   * @returns {object} created object
   */
  async createComment(twit) {
    const data = Comment.create({
      twit
    });
    return data;
  }

  /**
   * @method findAllComments
   * @param {object} emptyObject
   * @param {object} Replies
   * @returns {Array} result
   */
  async findAllComments() {
    const result = Comment.findAll({
    });
    return result;
  }

  /**
   * @method findOneComment
   * @param {Number} comment_Id
   * @returns {Object} result
   */
  async findOneComment(comment_Id) {
    const result = Comment.findOne({
      where: { id: comment_Id },
    });
    return result;
  }
  /**
   * @method deleteComment
   * @param {object} comment_id
   * @returns {string} message
   */
  async deleteComment(comment_id) {
    const result = await Comment.destroy({
      where: {
        id: comment_id,
      },
    });
    return result;
  }

  
}

export const commentService = new CommentService();
