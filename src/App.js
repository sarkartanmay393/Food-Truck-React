import styles from './App.module.css';
import HeaderView from "./components/HeaderView";
import FooterView from "./components/FooterView";
import AboutArea from "./components/AboutArea";

function App() {

    return (
        <section>
            <header className={styles.Header}>
                <HeaderView />
            </header>
            <main className={styles.Main}>
                <AboutArea />
            </main>
            <footer className={styles.Footer}>
                <FooterView />
            </footer>
        </section>
    );
}

export default App;
