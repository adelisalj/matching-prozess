import NextPageButton2 from "./NextPageButton2";
import styles from "./NextPageButtonComponent.module.css";

const NextPageButtonComponent = () => {
  return (
    <section className={styles.nextPageButtonComponent}>
      <div className={styles.modebuttonsAndFrames}>
        <div className={styles.modebewusstseinButtons}>
          <h1 className={styles.whatAreYour}>
            WHAT ARE YOUR ACTION VERBS, MAX?
          </h1>
        </div>
        <div className={styles.buttonSelectionFrames}>
          <div className={styles.buttonSelectionFrames1}>
            <div className={styles.buttonSelectionFrames2}>
              <div className={styles.buttonSelectionFrames3}>
                <button className={styles.button15}>
                  <div className={styles.selection14}>
                    <div className={styles.modebewusstsein}>schneiden</div>
                  </div>
                </button>
                <button className={styles.button16}>
                  <div className={styles.selection141}>
                    <div className={styles.modebewusstsein1}>waschen</div>
                  </div>
                </button>
                <button className={styles.button17}>
                  <div className={styles.selection142}>
                    <div className={styles.modebewusstsein2}>färben</div>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.buttonSelectionFrames4}>
              <div className={styles.button18Wrapper}>
                <button className={styles.button18}>
                  <div className={styles.selection143}>
                    <div className={styles.modebewusstsein3}>trimmen</div>
                  </div>
                </button>
              </div>
              <button className={styles.button19}>
                <div className={styles.selection144}>
                  <div className={styles.modebewusstsein4}>rasieren</div>
                </div>
              </button>
              <button className={styles.button20}>
                <div className={styles.selection145}>
                  <div className={styles.modebewusstsein5}>beraten</div>
                </div>
              </button>
            </div>
            <div className={styles.modebuttonsAndFramesWrapper}>
              <div className={styles.modebuttonsAndFrames1}>
                <button className={styles.button21}>
                  <div className={styles.selection146}>
                    <div className={styles.modebewusstsein6}>frisieren</div>
                  </div>
                </button>
                <button className={styles.button22}>
                  <div className={styles.selection147}>
                    <div className={styles.modebewusstsein7}>kommunizieren</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <NextPageButton2 />
      </div>
    </section>
  );
};

export default NextPageButtonComponent;
