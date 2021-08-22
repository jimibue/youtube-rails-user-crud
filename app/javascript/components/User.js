import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <h1>{props.user.email}</h1>
      <a href="/">users</a>
    </div>
  );
};

export default User;
