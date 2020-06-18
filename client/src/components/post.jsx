import React from "react";
import { List } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import moment from "moment";

const Post = ({ res, click, deletePost }) => {
  const history = useHistory();
  return (
    <List divided relaxed className="mx-auto mt-4">
      <List.Item className="mb-3">
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header
            as="a"
            onClick={() => {
              history.push(`post/${res.id}`);
            }}
          >
            {res.post}
          </List.Header>
          <List.Description>
            {moment(res?.createdAt).fromNow()}
          </List.Description>
          <List.Description>
            {res?.Reactions && res.Reactions.length
              ? `${
                  res.Reactions?.filter((res) => res.type === "comment").length
                }
            Comments`
              : `0 comments`}
          </List.Description>
          <List.Description as="a">
            <div className="d-flex justify-content-between">
              <p onClick={click}>
                {res?.Reactions && res.Reactions.length
                  ? `${
                      res.Reactions?.filter((res) => res.type === "like").length
                    }`
                  : 0}
                {res?.Reactions &&
                !res?.Reactions.filter((resi) => resi.type === "like").find(
                  (resil) => resil.userId == localStorage.id
                ) ? (
                  <i className="far fa-heart ml-1 font-size-info cursor-pointer"></i>
                ) : (
                  <i className="fas fa-heart ml-1 font-size-info text-danger cursor-pointer"></i>
                )}
              </p>
              {res.userId == localStorage.id && (
                <i
                  className="fa fa-trash text-danger mr-5"
                  onClick={deletePost}
                ></i>
              )}
            </div>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Post;
