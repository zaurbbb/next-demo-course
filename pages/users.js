import React, {
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import NavItem from "../components/NavItem";
import axios from "axios";
import MainContainer from "../components/MainContainer";

function Users({
  users,
}) {
  // if (users.length === 0) {
  //   return "Loading...";
  // }
  return (
    <MainContainer>
      <h1>Users's list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavItem
              href={`/users/${user.id}`}
              text={user.name}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export default Users;

export async function getStaticProps(context) {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = response.data;
  return {
    props: {users},
  }
}
