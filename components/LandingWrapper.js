import styles from "../styles/LandingWrapper.module.css"


export default function LandingWrapper() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sec12}>
                <div className={styles.b1}></div>
                <div className={styles.b2}>
                    <p>bienvenidos</p>
                    <h2>Periodontal & Oral Health</h2>
                    <p>Dr Gaspar Lugo Morales</p>
                </div>
            </div>

            <div className={styles.sec34}>
                <div className={styles.b3}>
                    <p>Contactanos para<br/> citas y preguntas</p>
                    <button>llamar</button>
                </div>
                <div className={styles.b4}>
                    <div className={styles.c1}>
                        <div className={styles.c1a}></div>
                    </div>
                    <div className={styles.b4r}>
                        <div className={styles.b4rc}></div>
                        <div className={styles.b4rc1}>
                            <div className={styles.b4rc1a}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sec567}>
                <div className={styles.b5}></div>
                <div className={styles.b6}></div>
                <div className={styles.b7}></div>
            </div>

            <div className={styles.sec891011}>
                <div className={styles.b8}></div>
                <div className={styles.b9}>
                    <div></div>
                </div>
                <div className={styles.b10}></div>
                <div className={styles.b11}></div>

            </div>



        </div>
    )
}