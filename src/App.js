import styles from './App.module.css';
import HeaderView from "./components/HeaderView";
import FooterView from "./components/FooterView";

function App() {

    return (
        <>
            <header className={styles.Header}>
                <HeaderView />
            </header>
            <footer className={styles.Footer}>
                <FooterView />
            </footer>
        </>
    );
}

export default App;
