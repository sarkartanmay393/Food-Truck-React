import styles from './AboutArea.module.css';
import {useContext} from "react";
import {MobileViewContext} from "../../index";

function AboutArea() {
    const isMobile = useContext(MobileViewContext)
    return (
        <section className={styles.AboutArea}>
            {isMobile ? <></> : <img className={styles.AboutImage} src={require('../../assets/about-img.png')} alt='website-about-img' />}
            <section className={styles.AboutTexts}>
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. t has survived not only five centuries.
                </p>
                <button>Read More</button>
            </section>
        </section>
    );
}

export default AboutArea;
