import React from "react";

const EditUser = (props) => {
  return (
    <div>
      <p>Form here</p>
      <form action={`/users/${props.user.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.user.name} name="user[name]" />
        <p>Email</p>
        <input defaultValue={props.user.email} name="user[email]" />
        <button type="submit">update</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default EditUser;
