import FrameComponent from "../components/FrameComponent";
import ScreenCaptureRectangle from "../components/ScreenCaptureRectangle";
import styles from "./Category2.module.css";

const Category2 = () => {
  return (
    <div className={styles.category2}>
      <main className={styles.macbookAir2}>
        <FrameComponent rectangle3="pending_49:115" />
        <section className={styles.buttonSelectionFrame}>
          <ScreenCaptureRectangle />
        </section>
      </main>
    </div>
  );
};

export default Category2;
