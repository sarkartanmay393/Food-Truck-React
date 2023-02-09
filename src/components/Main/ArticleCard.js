import styles from "./ArticleCard.module.css";

const ArticleCard = ({keyIdx, props}) => {
    return (
        <div key={keyIdx} className={styles.ArticleCard}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button>Read more</button>
        </div>
    );
}

export default ArticleCard;