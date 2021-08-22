import React from "react";

const NewUser = () => {
  return (
    <div>
      <p>Form here</p>
      <form action="/users" method="post">
        <p>Name</p>
        <input name="user[name]" />
        <p>Email</p>
        <input name="user[email]" />
        <button type="submit">add</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default NewUser;
