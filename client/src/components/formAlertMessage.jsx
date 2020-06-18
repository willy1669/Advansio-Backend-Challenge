import React from "react";

const FormAlertMessage = (props) => {
  return props.message ? (
    <div className="row justify-content-center py-2">
      <div className="col-12">
        <div
          className="alert alert-danger alert-dismissible fade show font-weight-normal text-dark"
          role="alert"
        >
          {props.message}
        </div>
      </div>
    </div>
  ) : null;
};

export default FormAlertMessage;
