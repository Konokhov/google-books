import { useDispatch } from "react-redux";

import { setCategory } from "../../redux/slices/filterSlice";
import styles from './Categories.module.css';

const Categories = () => {
    const dispatch = useDispatch();

    const addCategory = (e) => {
      dispatch(setCategory(e.target.value));
    };

    return (
        <div>
            <form>
                <label className={styles.label} htmlFor="catecories">Categories</label>
                <select onChange={addCategory} className={styles.categories} id="catecories">
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
            </form>
        </div>
    );
};

export default Categories;