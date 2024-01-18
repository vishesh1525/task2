import Card from "@/components/card/Card";
import styles from "./blogPage.module.css";


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{Card.title} Blog</h1>
      <div className={styles.content}>
         {Card.descrption}
      </div>
    </div>
  );
};

export default BlogPage;
