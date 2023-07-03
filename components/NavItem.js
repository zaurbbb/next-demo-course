import React from "react";
import Link from "next/link";
import styles from "../styles/NavItem.module.css";

function NavItem({
  href,
  text,
}) {
  return (
    <Link
      className={styles.link}
      href={href}
    >
      {text}
    </Link>
  );
}

export default NavItem;
