import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.links}>
      <Link href={"/"}>Main</Link>
      <Link href={"/characters"}>Characters</Link>
    </div>
  );
};
