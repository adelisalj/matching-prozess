import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NextPageButton2.module.css";

const NextPageButton2 = () => {
  const navigate = useNavigate();

  const onNextPageButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.nextPageButton} onClick={onNextPageButtonClick}>
      <div className={styles.nchsteSeite}>{`Nächste Seite -->`}</div>
    </div>
  );
};

export default NextPageButton2;
