import styles from './App.module.css';
import HeaderView from "./components/HeaderView";

function App() {

    return (
        <header className={styles.Header}>
            <HeaderView />
        </header>
    );
}

export default App;
