import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An unexpected error ocurred";
  let message = "Something went wrong";
  console.log(error);
  switch (error.status) {
    case 500:
      message = error.data.message;
      break;
    case 404:
      title = "Not found";
      message = "Could not find resource page";
      break;
    default:
      break;
  }
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
