import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { DEBOUNCE_TIME_DELAY_IN_MS } from "../../utils/constants";
import useDebounceSearch from "../../hooks/useDebounceSearch";
import { searchWareHouseList } from "../../features/warehouseListing/wareHouseSlice";
import { useDispatch } from "react-redux";



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const debouncedSearchValue = useDebounceSearch(
    searchTerm,
    DEBOUNCE_TIME_DELAY_IN_MS
  );

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(searchWareHouseList(debouncedSearchValue));
  }, [debouncedSearchValue]);

  return (
    <section aria-label="Search Box" className={styles.searchBoxContainer}>
      <input
        type="text"
        className={styles.searchBar}
        onChange={handleSearchTerm}
        value={searchTerm}
        placeholder="Search by Ware House Name"
        aria-label="Search by Ware House Name"
      />
    </section>
  );
};

export default SearchBar;
