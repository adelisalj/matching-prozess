import InnerFrame from "../components/InnerFrame";
import NextPageButtonComponent from "../components/NextPageButtonComponent";
import styles from "./Category1.module.css";

const Category1 = () => {
  return (
    <div className={styles.category3}>
      <main className={styles.macbookAir1}>
        <InnerFrame
          qAColor="#4892b1"
          headingTextColor="#4892b1"
          profilColor="#4892b1"
          propColor="#4892b1"
        />
        <NextPageButtonComponent />
      </main>
    </div>
  );
};

export default Category1;
