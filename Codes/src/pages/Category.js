import InnerFrame from "../components/InnerFrame";
import NextPageButton from "../components/NextPageButton";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.category4}>
      <main className={styles.macbookAir2}>
        <InnerFrame />
        <NextPageButton />
      </main>
    </div>
  );
};

export default Category;
