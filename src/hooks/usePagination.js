import { useEffect, useState } from "react";
import dynamicPerPageData from "../utils/dynamicPerPageData";
import dynamicPageNumbers from "../utils/dynamicPageNumbers";


const usePagination = (
  totalData,
  dataPerPage
) => {

    //state vaiable and setter for controlling the page number selected
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // state variable and setter for displaying dynamic page number
  const [pageNumbersArray, setpageNumbersArray] = useState([]);

  //state variable and setter for storing and setting the state for records to display on each page dynamically
  const [perPageData, setPerPageData] = useState([]);

  //calculates the total number of pages
  let totalPages = Math.ceil(totalData.length / dataPerPage);

  //sets page numbers (array of page number) and perPageData (array to user records) for display on screen 
  useEffect(() => {

    const tempPageNumbers = dynamicPageNumbers(
      totalPages,
      currentPageNumber
    );
    const tempPerPageData = dynamicPerPageData(
        totalData,
      currentPageNumber,
      dataPerPage
    );
    setpageNumbersArray(tempPageNumbers);
    setPerPageData(tempPerPageData);

    if (currentPageNumber > totalPages) {
      setCurrentPageNumber(currentPage => Math.max(1, currentPage - 1));
    }

  }, [currentPageNumber, totalData]);

  //Function to handle to go to first page 
  function goToFirstPage() {
    setCurrentPageNumber(1);
  }

  //Function to handle to go to previous page 

  function goToPreviousPage() {
    setCurrentPageNumber(currentPage => Math.max(1, currentPage - 1));
  }

   //Function to handle to go to next page 
  function goToNextPage() {
    setCurrentPageNumber(currentPage => Math.min(currentPage + 1, totalPages));
  }

   //Function to handle to go to clicked/selected page number
  function goToPage(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  //Function to handle to go to the last page
  function goToLastPage() {
    setCurrentPageNumber(currentPage => Math.max(currentPage, totalPages));
  }

  return { currentPageNumber, pageNumbersArray, perPageData, totalPages, goToFirstPage, goToNextPage, goToPreviousPage, goToLastPage, goToPage };
};

export default usePagination;
