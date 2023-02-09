import styles from './FooterView.module.css';

function FooterView() {
    return (
        <>
            <img className={styles.FooterLogo} src={require('../../assets/food-truck.png')} alt='website-logo' />

            <section className={styles.ContactUs}>
                <h1 className={styles.FooterH1}>Contact Us</h1>
                <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p>example2020@gmail.com</p>
                <p>(904) 443-0343</p>
            </section>

            <section className={styles.MoreOptions}>
                <h1 className={styles.FooterH1}>More</h1>
                <a href='/about-us'>About Us</a>
                <a href='/products'>Products</a>
                <a href='/career'>Career</a>
                <a href='/contact-us'>Contact Us</a>
            </section>

            <section className={styles.Socials}>
                <h1 className={styles.FooterH1}>Social Links</h1>
                <div className={styles.SocialsRow}>
                    <a href='/products' target='_blank'><img src={require('../../assets/insta.svg').default} alt='instagram-link' /></a>
                    <a href='/products' target='_blank'><img src={require('../../assets/twitter.svg').default} alt='instagram-link' /></a>
                    <a href='/products' target='_blank'><img src={require('../../assets/fb.svg').default} alt='instagram-link' /></a>
                </div>

                <p className={styles.CopyrightText}>© 2022 Food Truck Example</p>
            </section>
        </>
    );
}

export default FooterView;
