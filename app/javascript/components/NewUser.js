import React from "react";

const NewUser = () => {
  return (
    <div>
      <p>Form here</p>
      <form action="/users" method="post">
        <p>Name</p>
        <input defaultValue="sd" name="user[name]" />
        <p>Email</p>
        <input name="user[email]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewUser;
