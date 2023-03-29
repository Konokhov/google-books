import { useNavigate } from "react-router-dom";

import CardItem from "../CardItem/CardItem";
import Skeleton from "../Skeleton/Skeleton";
import styles from './CardList.module.css';

const CardList = ({ count, items, addStartIndex, isLoading }) => {
    const navigate = useNavigate();

    const goBack = (params) => navigate(`/details/${params}`);

    return (
        <>
            <div className={styles.found}>
                <h1>Found {count} results</h1>
            </div>
            <div className={styles.cards}>
                {items.map((item, index) => (
                    <div key={items[index].id} className={styles.link} onClick={() => goBack(items[index].id)}>
                        {isLoading ? <Skeleton /> : <CardItem item={item} />}
                    </div>
                ))}
            </div>
            {!isLoading && (
                <div className={styles.pagination}>
                    <button className={styles.button} onClick={addStartIndex}>Load more</button>
                </div>
            )}
        </>
    );
};

export default CardList;