import styles from './App.module.css';
import HeaderView from "./components/HeaderView";
import FooterView from "./components/FooterView";
import AboutArea from "./components/AboutArea";
import LatestArticles from "./components/LatestArticles";


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
