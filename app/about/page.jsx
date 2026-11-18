import styles from "./About.module.css"

export default function AboutPage() {
    console.log(styles);
    
    return (
        <div className={styles.card} style={{ border: "5px solid red" }}>
            <h1 className={styles.title}>About page</h1>
            <p className={styles.para}>This is about page</p>
        </div>
    );
}