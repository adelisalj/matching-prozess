import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameD.module.css";

const FrameD = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/category-1");
  }, [navigate]);

  return (
    <section className={styles.frameD}>
      <div className={styles.interestContainer}>
        <div className={styles.whatAreYourInterests}>
          <h3 className={styles.whatAreYour}>WHAT ARE YOUR INTERESTS, MAX?</h3>
        </div>
        <div className={styles.selectionFrame}>
          <div className={styles.bildschirmfoto20240215Um0} />
          <div className={styles.imageContainer}>
            <button className={styles.selection1}>
              <img
                className={styles.selection1Child}
                alt=""
                src="/rectangle-12.svg"
                onClick={onRectangleClick}
              />
              <div className={styles.startNow}>START NOW!</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameD;
