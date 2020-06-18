import store from "../store";
import axios from "axios";
import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_POST,
  ADD_POST,
} from "../actions/types";

const signUp = async (values) => {
  localStorage.removeItem("token");
  store.dispatch({
    type: LOGIN_USER,
  });
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { status, user } = await axios.post(
    `https://twittee.herokuapp.com/api/v1/user/register`,
    values,
    config
  );
  if (status === 200) {
    return user;
  } else {
    return null;
  }
};

const login = async (values) => {
  store.dispatch({
    type: LOGIN_USER,
  });
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { status, data } = await axios.post(
    `https://twittee.herokuapp.com/api/v1/user/login`,
    values,
    config
  );
  if (status === 200) {
    return data;
  } else {
    return null;
  }
};

const getPosts = async () => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  };
  const { status, data } = await axios.get(
    `https://twittee.herokuapp.com/api/v1/comments/`,
    config
  );
  if (status === 200) {
    return data;
  } else {
    return null;
  }
};

const postComment = async (id, values) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  };
  const { status, data } = await axios.post(
    `https://twittee.herokuapp.com/api/v1/comments/comment_id`,
    values,
    config
  );
  if (status === 200) {
    return data;
  } else {
    return null;
  }
};


const addPost = async (values) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  };
  const { status, data } = await axios.post(
    `https://twittee.herokuapp.com/api/v1/comments/create`,
    values,
    config
  );
  if (status === 201) {
    return data;
  } else {
    return null;
  }
};

const removePost = async (id) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  };
  const { status, data } = await axios.delete(
    `https://twittee.herokuapp.com/api/v1/comments/comment_id`,
    config
  );
  if (status === 200) {
    return data;
  } else {
    return null;
  }
};

export default {
  signUp,
  login,
  getPosts,
  addPost,
  postComment,
  removePost,
};
