//

import Head from "next/head";
import { MyLink } from "./myLink";
import styles from "../styles/mainContainer.module.css";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Maryan Vyntu next.js - " + keywords}></meta>
        <title>4petals</title>
        <link rel="shortcut icon" href="/logo-4petals.png" type="image/png" />
      </Head>
      <div className={styles.navbar}>
        <MyLink href={"/"} text="Main" />
        <MyLink href={"/users"} text="Users" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
