import React from "react";
import styles from "./WareHouseDetailEdit.module.css";


const WareHouseDetailEdit = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox"
          ? !JSON.parse(value)
          : type === "number"
          ? parseInt(value)
          : value,
    }));
  };

  return (
    <div className={styles.wareHouseDetailContainer}>
      {Object.keys(formData)
        .filter((key) => key !== "id")
        .map((detail, index) => (
          <div key={index} className={styles.wareHouseDetail}>
            <label className={styles.detailHeading}>{detail} : </label>
            <input
              type={
                typeof formData[detail] === typeof "text"
                  ? "text"
                  : typeof formData[detail] === typeof 1
                  ? "number"
                  : "checkbox"
              }
              name={detail}
              value={formData[detail]}
              checked={formData[detail] || false}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
    </div>
  );
};

export default WareHouseDetailEdit;
