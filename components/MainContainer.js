import React from "react";
import NavItem from "./NavItem";
import Head from "next/head";

function MainContainer({
  children,
  keywords,
}) {
  return (
    <>
      <Head>
        <meta keywords={"13LAB Software Company" + keywords} />
        <title>Main page</title>
      </Head>
      <nav>
        <NavItem
          href={"/"}
          text={"Main"}
        />
        <NavItem
          href={"/users"}
          text={"Users"}
        />
      </nav>
      <div>
        {children}
      </div>
    </>
  );
}

export default MainContainer;
