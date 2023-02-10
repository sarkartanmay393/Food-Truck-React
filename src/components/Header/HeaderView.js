import styles from './HeaderView.module.css';
import {useContext} from "react";
import {MobileViewContext} from "../../index";

function HeaderView() {
    const isMobile = useContext(MobileViewContext);
    return (
        <>
            <section className={styles.TopIntro}>
                <section className={styles.CenterArea}>
                    {isMobile ? <></> : <img style={{cursor: "pointer"}} onClick={() =>  {window.open('/', '_self')}} src={require('../../assets/food-truck.png')} alt='website-logo'/>}
                    <h3>Discover the <br/><span>Best</span> Food and Drinks</h3>
                    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                    <button>Explore Now!</button>
                </section>
            </section>

            <section className={styles.TopPizza}>
                <button>Get In Touch</button>
                <img src={require('../../assets/pizza.png')} alt='website-pizza'/>
            </section>

            <img className={styles.HeaderVector} src={require('../../assets/vector.svg').default} alt='header-vector' />
        </>
    );
}

export default HeaderView;
