import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NextPageButton4.module.css";

const NextPageButton4 = () => {
  const navigate = useNavigate();

  const onNextPageButtonClick = useCallback(() => {
    navigate("/category-2");
  }, [navigate]);

  return (
    <div className={styles.nextPageButton} onClick={onNextPageButtonClick}>
      <div className={styles.nchsteSeite}>{`Nächste Seite -->`}</div>
    </div>
  );
};

export default NextPageButton4;
