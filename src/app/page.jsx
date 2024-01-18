import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/initial/Featured";
import CardList from "@/components/cardList/CardList";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <div className={styles.content}>
        <CardList page={page}/>
      </div>
    </div>
  );
}
