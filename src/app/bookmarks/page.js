import Copyright2 from "../components/copyright2";
import styles from "../styles/Bookmarks.module.css";
function bookmarks() {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.CTA}></div>
          <span className={styles.bookmark}>
            <img src="/bookmark.svg" height={312} width={312} alt="heart"></img>
          </span>

          <p className={styles.text}>Your Bookmarks will appear here.</p>

          <span className={styles.Footern}>
            <Copyright2 />
          </span>
        </div>
      </div>
    </>
  );
}

export default bookmarks;