import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";
import WareHouseTable from "../../components/WareHouseTable/WareHouseTable";
import Pagination from "../../components/Pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import { DATA_PER_PAGE } from "../../utils/constants";
import Filters from "../../components/Filters/Filters";
import styles from "./WareHouseListHome.module.css";

const WareHouseHome = () => {

  const { wareHouseListDisplay } = useSelector((state) => state.app);

  const {
    currentPageNumber,
    pageNumbersArray,
    perPageData,
    totalPages,
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage,
    goToPage,
  } = usePagination(wareHouseListDisplay, DATA_PER_PAGE);

  return (
    <main className={styles.homeWrapper}>
      <section className={styles.heading}>
        <h1>Ware House List</h1>
      </section>
      <SearchBar />
      <section className={styles.filterContainer}>
        <Filters />
      </section>
      <WareHouseTable perPageData={perPageData} />

      <section className={styles.paginationContainer}>
        <Pagination
          pageNumbersArray={pageNumbersArray}
          totalPages={totalPages}
          currentPageNumber={currentPageNumber}
          goToFirstPage={goToFirstPage}
          goToPreviousPage={goToPreviousPage}
          goToPage={goToPage}
          goToNextPage={goToNextPage}
          goToLastPage={goToLastPage}
        />
      </section>
    </main>
  );
};

export default WareHouseHome;
