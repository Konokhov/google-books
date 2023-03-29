import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CardList from "../components/CardList/CardList";

const Home = () => {
    const key = "AIzaSyB8w6gQt16B5hMBGwsagaDbmn6JzxEp0zE";

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const { categoryName, sortName } = useSelector(state => state.filter);

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://www.googleapis.com/books/v1/volumes?startIndex=${startIndex}&maxResults=8&q=${categoryName}&orderBy=${sortName}&key=${key}`)
            .then(res => res.json())
            .then(data => {
                if (items.length <= startIndex) {
                    setItems([...items, ...data.items]);
                } else {
                    setItems(data.items);
                }

                setCount(data.totalItems);
                setIsLoading(false);
            })

    }, [startIndex, categoryName, sortName]);

    const addStartIndex = () => {
        setStartIndex(startIndex + 8);
    };

    useEffect(() => {
        if (startIndex > 0) {
            let height = document.documentElement.scrollHeight;

            document.documentElement.scrollTop = height;
        }
    }, [items]);

    return (
        <>
            <CardList isLoading={isLoading} count={count} items={items} addStartIndex={addStartIndex}/>
        </>
    );
};

export default Home;