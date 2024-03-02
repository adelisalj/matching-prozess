import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NextPageButton3.module.css";

const NextPageButton3 = () => {
  const navigate = useNavigate();

  const onNextPageButtonClick = useCallback(() => {
    navigate("/category-3");
  }, [navigate]);

  return (
    <div className={styles.nextPageButton} onClick={onNextPageButtonClick}>
      <div className={styles.nchsteSeite}>{`Nächste Seite -->`}</div>
    </div>
  );
};

export default NextPageButton3;
