import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Categories from "../Categories/Categories";

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Search for books</h1>
            <Search />
            <div className={styles.content}>
                <Categories />
                <Sort />
            </div>
        </header>
    );
};

export default Header;