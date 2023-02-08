import styles from './LatestArticles.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function LatestArticles() {

    const LatestArticlesComponent = () => {
        return (
            <section className={styles.Articles}>
                <div className={styles.ArticleCard}>
                    <img src={require('../assets/article-1.png')} alt='articles 1' />
                    <h1>Grilled  Tomatoes at Home</h1>
                    <p>PLorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard...
                    </p>
                    <button>Read more</button>
                </div>
                <div className={styles.ArticleCard}>
                    <img src={require('../assets/article-1.png')} alt='articles 1' />
                    <h1>Grilled  Tomatoes at Home</h1>
                    <p>PLorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard...
                    </p>
                    <button>Read more</button>
                </div>
                <div className={styles.ArticleCard}>
                    <img src={require('../assets/article-1.png')} alt='articles 1' />
                    <h1>Grilled  Tomatoes at Home</h1>
                    <p>PLorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard...
                    </p>
                    <button>Read more</button>
                </div>
            </section>
        );
    };

    return (
        <section className={styles.ArticleArea}>
            <h1 className={styles.ArticleAreaHeadline}>Latest Articles</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <LatestArticlesComponent />
                    </Route>
                    <Route exact path='/page-2'>
                        <LatestArticlesComponent />
                    </Route>
                </Switch>
            </BrowserRouter>
            <div className={styles.PageSlider}>
                <img className={styles.LeftArrow} src={require('../assets/left-arrow.svg').default} alt='left-arrow-button' />
                <p>
                    <span className={styles.active}>1</span>/<span>2</span>
                </p>
                <img className={styles.RightArrow} src={require('../assets/left-arrow.svg').default} alt='right-arrow-button' />
            </div>
            {/*<a href='/page-2'>2</a>*/}
        </section>
    );
}

export default LatestArticles;
