//
import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/mainContainer";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User {query.id}</h1>
        <div className={styles.userName}>user name - {user.name}</div>
      </div>
    </MainContainer>
  );
}
export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
