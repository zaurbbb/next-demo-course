import { useRouter } from "next/router";
import styles from "../../styles/User.module.css";
import React from "react";
import axios from "axios";
import MainContainer from "../../components/MainContainer";

function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer className={styles.user}>
      <h1>
        User with id {query.id}
      </h1>
      <p>Name of user {user.name}</p>
    </MainContainer>
  );
}

export default User;

export async function getServerSideProps({ params }) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = response.data;
  return {
    props: { user },
  };
}
