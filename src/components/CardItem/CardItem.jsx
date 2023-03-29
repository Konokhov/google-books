import styles from "../CardItem/CardItem.module.css";

const CardItem = ({ item }) => {
    const authors = item.volumeInfo.authors;
    const img = item?.volumeInfo?.imageLinks?.thumbnail;

    return (
        <div className={styles.card}>
            <div className={styles.itemImg}>
                {img ? <img src={img} alt="book"/> : ""}
            </div>
            <div className={styles.info}>
                <div className={styles.link}>{item.volumeInfo.categories}</div>
                <div className={styles.title}>{item.volumeInfo.title}</div>
                <div className={styles.author}>{authors ? authors[0] : ""}</div>
            </div>
        </div>
    );
};

export default CardItem;