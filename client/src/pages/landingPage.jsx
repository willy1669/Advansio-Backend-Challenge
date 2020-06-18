import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/post";
import { useHistory } from "react-router-dom";
import {
  addPost,
  fetchPosts,
  addLike,
  deletePost,
} from "../state/actions/user";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/postForm";

const LandingPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.user.posts);
  const token = localStorage.getItem("token");
  const history = useHistory();
  if (!localStorage.token) {
    history.push("/");
  }
  const onSubmit = (value) => {
    dispatch(addPost(value));
  };

  const deletePosts = (id) => {
    dispatch(deletePost(id));
  };

  const click = (id) => {
    const find = post.find((res) => res.id == id);
    const reactPost = find?.Reactions.filter((res) => res.type === "like").find(
      (res) => res.userId == localStorage.id
    );
    if (reactPost) {
      return;
    }
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className="mx-auto mt-5 row">
      <div className="mx-auto">
        <PostForm onSubmit={onSubmit} />
        {post && post.length && (
          <div>
            {post.map((res, index) => (
              <Post
                res={res}
                key={index}
                click={() => click(res.id)}
                deletePost={() => deletePosts(res.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
