import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import styles from "@/styles/Home.module.css";

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  );
};

// Это чтобы обозначить, что этот Layout для страницы.
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
