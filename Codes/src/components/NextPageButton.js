import NextPageButton1 from "./NextPageButton1";
import styles from "./NextPageButton.module.css";

const NextPageButton = () => {
  return (
    <section className={styles.nextPageButton}>
      <div className={styles.frameC}>
        <div className={styles.attitudeMaxQuestion}>
          <h1 className={styles.whatAreYour}>WHAT ARE YOUR ATTITUDE, MAX?</h1>
        </div>
        <div className={styles.innerFrameB}>
          <div className={styles.selectionModeText}>
            <div className={styles.modeText}>
              <div className={styles.wHATQuestions}>
                <button className={styles.button23}>
                  <div className={styles.selection14}>
                    <div className={styles.modebewusstsein}>Kreativität</div>
                  </div>
                </button>
                <button className={styles.button24}>
                  <div className={styles.selection141}>
                    <div className={styles.modebewusstsein1}>
                      Zuverlässigkeit
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.nextPageBtn}>
              <button className={styles.button25}>
                <div className={styles.selection142}>
                  <div className={styles.modebewusstsein2}>Flexibilität</div>
                </div>
              </button>
              <button className={styles.button26}>
                <div className={styles.selection143}>
                  <div className={styles.modebewusstsein3}>
                    Kundenorientiert
                  </div>
                </div>
              </button>
              <button className={styles.button27}>
                <div className={styles.selection144}>
                  <div className={styles.modebewusstsein4}>Feingefühl</div>
                </div>
              </button>
            </div>
            <div className={styles.button28Wrapper}>
              <button className={styles.button28}>
                <div className={styles.selection145}>
                  <div className={styles.modebewusstsein5}>
                    Kommunikationsfähigkeit
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <NextPageButton1 />
      </div>
    </section>
  );
};

export default NextPageButton;
