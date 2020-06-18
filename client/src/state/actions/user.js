import {
  FETCH_POST,
  ADD_COMMENT,
  ADD_POST,
  REMOVE_POST,
} from "./types";
import services from "../services/user";

export const fetchPosts = () => (dispatch) => {
  services.getPosts().then(
    (res) => {
      dispatch({
        type: FETCH_POST,
        payload: res.data,
      });
    },
    (err) => {}
  );
};

export const addComment = (id, value) => (dispatch) => {
  services.postComment(id, value).then(
    (res) => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data,
      });
    },
    (err) => {}
  );
};


export const addPost = (value) => (dispatch) => {
  services.addPost(value).then(
    (res) => {
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    },
    (err) => {}
  );
};

export const deletePost = (id) => (dispatch) => {
  services.removePost(id).then(
    (res) => {
      console.log(res.data);
      dispatch({
        type: REMOVE_POST,
        payload: res.data,
        id: id,
      });
    },
    (err) => {}
  );
};
