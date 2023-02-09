import styles from './LatestArticles.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArticleCard from "./ArticleCard";
import {useState} from "react";

function LatestArticles() {
    const [pageNo, setPageNo] = useState(1);
    const articles = [
            {
            title: 'Grilled Tomatoes at Home',
            desc: `PLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard...`,
            image: require('../../assets/a-1.png'),
            },{
            title: 'Snacks for Travel',
            desc: `PLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard...`,
            image: require('../../assets/a-2.png'),
            },{
            title: 'Post-workout Recipes',
            desc: `PLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard...`,
            image: require('../../assets/a-3.png'),
            },{
            title: 'How To Grill Corn',
            desc: `PLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard...`,
            image: require('../../assets/a-4.png'),

            },{
            title: 'Crunchwrap Supreme',
            desc: `PLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard...`,
            image: require('../../assets/a-5.png'),
            },{
            title: 'Broccoli Cheese Soup',
            desc: `PLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard...`,
            image: require('../../assets/a-6.png'),
            },
        ];

    const PageSlider = () => {
        return (
            <div className={styles.PageSlider}>
                <a href='/'>
                    <img className={styles.LeftArrow} src={require('../../assets/right-arrow.svg').default} alt='left-arrow-button' />
                </a>
                <p>
                    <span id='page-1' className={pageNo === 1 ? styles.active : styles.noActive}>
                        1
                    </span>
                    /
                    <span id='page-2' className={pageNo === 2 ? styles.active : styles.noActive}>
                        2
                    </span>
                </p>
                <a href='/page2'>
                    <img className={styles.RightArrow} src={require('../../assets/right-arrow.svg').default} alt='right-arrow-button' />
                </a>
            </div>
        );
    }

    const LatestArticlesComponent = ({page}) => {
        setPageNo(page);
        return (
            <section className={styles.Articles}>
                {articles.map((value, index) => {
                    if (page === 2) {
                        if (index <= 2) {return null}
                        return (<ArticleCard keyIdx={index} props={articles[index]}/>);
                    } else if (page === 1) {
                        if (index > 2) {return null}
                        return (<ArticleCard keyIdx={index} props={articles[index]}/>);
                    }
                    return <></>;
                })}
            </section>
        )
    };
    return (
        <section className={styles.ArticleArea}>
            <h1 className={styles.ArticleAreaHeadline}>Latest Articles</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <LatestArticlesComponent page={1}/>
                    </Route>
                    <Route exact path='/page2'>
                        <LatestArticlesComponent page={2} />
                    </Route>
                </Switch>
                <PageSlider />
            </BrowserRouter>
        </section>
    );
}



export default LatestArticles;
