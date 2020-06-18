import { commentService } from "../services/CommentService.js";
import { repliesService } from "../services/RepliesService.js";
import Repliesmodel from "../db/index";
import commentModel from "../db/index";

const { Replies } = Repliesmodel;
const { Comment } = commentModel;

/**
 * @class CommentController
 */
export default class CommentController {
  /**
   * @method createComment
   * @description creates a new comment from a logged in user if token is verified
   * @param {*} req
   * @param {*} res
   * @returns {object} created comment
   */
  static async createComment(req, res) {
    const {
      user: { id },
      body: { twit },
    } = req;

    const comment = await commentService.createComment(twit);

    comment.userId = id;
    await comment.save();

    return res.status(200).json({
      status: true,
      message: "comment created successfully",
      comment,
    });
  }

  /**
   * @method getAllComments
   * @description finds all comments
   * @param {*} req
   * @param {*} res
   * @returns {object} comments
   */
  static async getAllComments(req, res) {
    const comments = await Comment.findAll({ 
      include: [Replies]
    });

    return res.status(200).json({
      status: true,
      comments,
    });
  }

  /**
   * @method updateComment
   * @description update comment with replies
   * @param {*} req
   * @param {*} res
   * @returns {object} comments
   */
  static async updateComment(req, res) {
    const {
      user: { id },
      body: { body: body, comment_id },
    } = req;

    const comment = await commentService.findOneComment(comment_id);

    if (!comment)
      return res.status(400).json({
        status: false,
        message: "comment not found",
      });

    const postComment = await repliesService.createReplies(
      comment_id,
      body,
      id
    );

    if (postComment)
      return res.status(200).json({
        status: true,
        postComment,
      });
  }

  /**
   * @method deleteComment
   * @description deletes a post if owned by a user
   * @param {*} req
   * @param {*} res
   * @returns {object} message
   */
  static async deleteComment(req, res) {
    const {
      user: { id },
      body: { comment_id },
    } = req;

    const comment = await commentService.findOneComment(comment_id);

    if (!comment) return res.status(404).json({
      status: false,
      message: `could not find comment`,
    });

    if (comment.userId !== id) {
      return res.status(401).json({
        status: false,
        message: ` This comment does not belong to you`,
      });
    }

    const result = commentService.deleteComment(comment_id);

    return res.status(200).json({
      status: true,
      message: ` comment deleted successfully `,
    });
  }
}
