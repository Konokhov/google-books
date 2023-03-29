import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './CardDetails.module.css';

const CardDetails = () => {
    const [data, setData] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => res.json())
            .then(date => setData(date))
    }, []);

    const img = data?.volumeInfo?.imageLinks?.thumbnail;

    if (!data) {
        return <h1 className={styles.loading}>Загрузка</h1>;
    }

    return (
        <>
            <div className={styles.cardDetails}>
                <div className={styles.blockImg}>
                    <div className={styles.imgContainer}>
                        {img ? <img className={styles.bookImg} src={img} alt="book"/> : ""}
                    </div>
                </div>
                <div className={styles.info}>
                    <div>{data.volumeInfo.categories}</div>
                    <div>{data.volumeInfo.authors}</div>
                    <div>{data.volumeInfo.title}</div>
                </div>
            </div>
        </>
    );
};

export default CardDetails;