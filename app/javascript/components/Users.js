import React from "react";

const Users = (props) => {
  return (
    <div>
      <h1>Users Page</h1>
      <a href="/users/new">create a new user</a>
      <p>{1 + 1}</p>
      <p>{new Date().toGMTString()}</p>
      {props.users.map((user) => {
        return (
          <div style={{ margin: "20px", border: "1px solid" }} key={user.id}>
            <p>ID: {user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <div>
              <a href={`/users/${user.id}`}>show user</a>
              <a href={`/users/${user.id}/edit`}>edit user</a>
              <a href={`/users/${user.id}`} data-method="delete">
                delete user
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
