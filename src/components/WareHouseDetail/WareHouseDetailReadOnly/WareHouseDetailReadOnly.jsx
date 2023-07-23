import React from "react";
import { useSelector } from "react-redux";
import styles from "./WareHouseDetailReadOnly.module.css";


const WareHouseDetailReadOnly = () => {
  const { wareHouseDetail } = useSelector((state) => state.app);

  return (
    <div className={styles.wareHouseDetailContainer}>
      {Object.keys(wareHouseDetail)
        .filter((key) => key !== "id")
        .map((detail, index) => (
          <div key={index} className={styles.wareHouseDetail}>
            <span className={styles.detailHeading}>{detail} : </span>
            {typeof wareHouseDetail[detail] !== typeof true
              ? wareHouseDetail[detail]
              : wareHouseDetail[detail] === false
              ? "No"
              : "Yes"}
          </div>
        ))}
    </div>
  );
};

export default WareHouseDetailReadOnly;
