import { useEffect, useState } from "react";


const useDebounceSearch = (searchTerm, debounceDelay) => {

  //state variable and setter to store the search term for debouncing.
  const [debounceValue, setDebounceValue] = useState(searchTerm);

  // performing debouncing whenever a character is typed
  useEffect(() => {
      // set the search term to decounce value after some delay
    const timeHandler = setTimeout(() => {
      setDebounceValue(searchTerm);
    }, debounceDelay);

    //clear the setTimeout timer id if searchTerm or debounceDelay value changes 
    return () => {
      clearTimeout(timeHandler);
    };
  }, [searchTerm, debounceDelay]);

  return debounceValue;
};

export default useDebounceSearch;
