import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@material-ui/core";
import { addComment } from "../state/actions/user";
import { useSelector, useDispatch } from "react-redux";

const CommentForm = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [isLoading, setIsloading] = useState(false);

  return (
    <div>
      <form
        onSubmit={handleSubmit(props.onSubmit)}
        method="POST"
        id="commentform"
        noValidate
      >
        <div className="form-row my-4">
          <div className="form-group col-12">
            <textarea
              name="comment"
              ref={register({ required: true, max: 1000 })}
              rows={2}
              placeholder="Add your comment"
              className={
                errors.comment ? "form-control is-invalid" : "form-control"
              }
            />
            <div className="invalid-feedback">
              {errors.comment && "You have to say something"}
            </div>
          </div>

          <div className="form-group col-12 text-right">
            <button type="submit" className="btn btn-primary rounded-0">
              {isLoading ? (
                <span className="px-3 m-w-90 d-block">
                  <CircularProgress color="inherit" size={"1rem"} />
                </span>
              ) : (
                <span
                  className="text-white min-w-90"
                  style={{ fontFamily: "Roboto", fontWeight: 500 }}
                >
                  Comment
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
