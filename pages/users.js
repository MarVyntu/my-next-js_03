import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/mainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
      <div className="user-list">
        <h1 className="user-list-title">List users</h1>
        <ul className="user-list-content">
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}
