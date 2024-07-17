import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Search Contacts:</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;