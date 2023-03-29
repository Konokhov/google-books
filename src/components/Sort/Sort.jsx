import { useDispatch } from "react-redux";

import { setSort } from "../../redux/slices/filterSlice";
import styles from "../Sort/Sort.module.css";

const Sort = () => {
    const dispatch = useDispatch();

    const addSort = (e) => {
        dispatch(setSort(e.target.value));
    };

    return (
        <div>
            <form>
                <label className={styles.label} htmlFor="sort">Sorting by</label>
                <select onChange={addSort} className={styles.sort} id="sort">
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </form>
        </div>
    );
};

export default Sort;