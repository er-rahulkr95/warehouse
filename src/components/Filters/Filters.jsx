import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredWareHouseList } from "../../features/warehouseListing/wareHouseSlice";
import styles from "./Filters.module.css";


const Filters = () => {
  const dispatch = useDispatch();
  const { wareHouseList } = useSelector(
    (state) => state.app
  );
  const [filters, setFilters] = useState({
    city: "",
    cluster: "",
    spaceAvailable: "",
  });

  const uniqueCities = [
    ...new Set(wareHouseList.map((warehouse) => warehouse.city)),
  ];
  const uniqueClusters = [
    ...new Set(wareHouseList.map((warehouse) => warehouse.cluster)),
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleClearFilter = (e) => {
    setFilters({
      city: "",
      cluster: "",
      spaceAvailable: "",
    });
  };

  useEffect(() => {
    dispatch(filteredWareHouseList(filters));
  }, [filters]);

  return (
    <>
      <div>
        <h3>Filters:</h3>
      </div>
      <div className={styles.filterBarTile}>
        <select name="city" value={filters.city} onChange={handleFilterChange}>
          <option value="">Select City</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterBarTile}>
        <select
          name="cluster"
          value={filters.cluster}
          onChange={handleFilterChange}
        >
          <option value="">Select Cluster</option>
          {uniqueClusters.map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterBarTile}>
        <input
          type="number"
          name="spaceAvailable"
          placeholder="Space Available"
          value={filters.spaceAvailable}
          onChange={handleFilterChange}
        />
      </div>
      <div className={styles.clearFilter}>
        <button
          className={styles.clearButton}
          onClick={() => handleClearFilter()}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Filters;
