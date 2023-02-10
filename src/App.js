import styles from './App.module.css';
import HeaderView from "./components/Header/HeaderView";
import FooterView from "./components/Footer/FooterView";
import AboutArea from "./components/Main/AboutArea";
import LatestArticles from "./components/Main/LatestArticles";

function App() {

    return (
        <section>
            <header className={styles.Header}>
                <HeaderView />
            </header>
            <main className={styles.Main}>
                <AboutArea />
                <LatestArticles />
            </main>
            <footer className={styles.Footer}>
                <FooterView />
            </footer>
        </section>
    );
}

export default App;
