import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WareHouseTable.module.css";

const WareHouseTable = ({ perPageData }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.tableContianer}>
        <table className={styles.warehouseTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Space Available</th>
              <th>Type</th>
              <th>Cluster</th>
              <th>Registered</th>
              <th>Live</th>
            </tr>
          </thead>
          {perPageData.length > 0 && (
            <>
              <tbody className={styles.warehouseTableBody}>
                {perPageData.map((warehouse, index) => (
                  <tr
                    key={warehouse.id}
                    onClick={() => {
                      navigate(`/wareHouse/details/${warehouse.id}`);
                    }}
                  >
                    <td>{warehouse.name}</td>
                    <td>{warehouse.city}</td>
                    <td>{warehouse.space_available}</td>
                    <td>{warehouse.type}</td>
                    <td>{warehouse.cluster}</td>
                    <td>{warehouse.is_registered ? "Yes" : "No"}</td>
                    <td>
                      <span
                        className={
                          warehouse.is_live ? styles.greenTile : styles.redTile
                        }
                      >
                        {warehouse.is_live ? "Yes" : "No"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </section>
    </>
  );
};

export default WareHouseTable;
