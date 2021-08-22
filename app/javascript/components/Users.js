import React from "react";

const Users = (props) => {
  return (
    <div>
      <h1>Users Page</h1>
      <p>{1 + 1}</p>
      <p>{new Date().toGMTString()}</p>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
