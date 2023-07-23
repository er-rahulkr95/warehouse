const dynamicPerPageData = (totalData, currentPageNumber, dataPerPage) => {

    const indexOfLastData = currentPageNumber * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const slicedUserRecord = totalData.slice(indexOfFirstData, indexOfLastData);
    return slicedUserRecord;
  };
  
  export default dynamicPerPageData;
  