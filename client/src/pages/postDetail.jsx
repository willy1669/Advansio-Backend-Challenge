import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { List } from "semantic-ui-react";
import CommentForm from "../components/comment";
import {  addComment } from "../state/actions/user";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

const PostDetail = () => {
  const post = useSelector((state) => state.user.post);
  const reaction = useSelector((state) => state.user.reaction);
  const dispatch = useDispatch();
  let { id } = useParams();
  const history = useHistory();
  if (!localStorage.token) {
    history.push("/");
  }

  const onSubmit = async (values) => {
    dispatch(addComment(post.id, values));
  };
  return (
    <div className=" mx-auto mt-5 row">
      {post && post.id && (
        <div className="mx-auto">
          <h2 className="mb-5">{post.post}</h2>
          <div className="mt-1 d-flex justify-content-between">
            <p>
              {" "}
              {`${reaction.filter((res) => res.type === "comment").length}
            Comments`}
            </p>
            <span>
              {`${reaction.filter((res) => res.type === "like").length}`}
              <i className="fas fa-heart font-size-info ml-1 text-danger cursor-pointer"></i>
            </span>
          </div>
          <CommentForm onSubmit={onSubmit} />
          <div>
            <h4>Comments</h4>
            {reaction
              .filter((reaction) => reaction.type === "comment")
              .map((res, index) => (
                <List divided relaxed className="mx-auto mt-4" key={index}>
                  <List.Item className="mb-3">
                    <List.Icon
                      name="github"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="a">{res.value}</List.Header>
                      <List.Description as="a">
                        {moment(res?.createdAt).fromNow()}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
