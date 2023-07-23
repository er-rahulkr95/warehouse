import {ELLIPSIS} from "./constants"

const dynamicPageNumbers =(totalPages, currentPageNumber)=>{


let pageNumberArrays = [];

let siblingStart = currentPageNumber - 1;
let siblingEnd = currentPageNumber + 1;

if( currentPageNumber > 2 && totalPages > 4){ //if currentPageNumber value is greater than 2 and total number of pages is greater than 4 then add 1 after the previous button
  pageNumberArrays.push(1) ;
  if(currentPageNumber > 3 && totalPages > 5){ //if currentPageNumber value is greater than 3 and total number of pages is greater than 5 then add ELLIPSIS (...) after the first or currentPageNumber
    pageNumberArrays.push(ELLIPSIS);
  }
}

// Setting page numbers to show before current page number
if (currentPageNumber === totalPages && totalPages > 2 ) {
  siblingStart = siblingStart - 2;
} else if (currentPageNumber === (totalPages - 1) && totalPages > 2) {
  siblingStart = siblingStart - 1;
}

// Setting page numbers to show after current page number

if (currentPageNumber === 1) {
  siblingEnd = siblingEnd + 2;
} else if (currentPageNumber === 2) {
  siblingEnd  = siblingEnd + 1;
}

// Generating the page numbers 
for (let pageNumber = siblingStart; pageNumber <= siblingEnd; pageNumber++) {
  if (pageNumber > totalPages) { //if pageNumber is greater than totalPage length then continue
    continue;
  }
  if (pageNumber <= 0) { //if pageNumber is 0 than add +1 in pageNumber value
    pageNumber = pageNumber + 1;
  }
 
  pageNumberArrays.push(pageNumber)
}

if(currentPageNumber < (totalPages - 1) && totalPages > 4){ //if currentPageNumber value is less than totalPage value by -1 and totalPages is greater than 4 then show the last page number
  if(currentPageNumber < (totalPages - 2) && totalPages > 5){ //if currentPageNumber value is less than totalPage value by -2   and totalPages is greater than 5 then add ELLIPSIS (...) before the last page number
    pageNumberArrays.push(ELLIPSIS)
  }
  
  pageNumberArrays.push(totalPages)
}


if(totalPages>0){
  return pageNumberArrays; //return the list of generated page numbers 
}else{
  return [0]; // if no page is to show then return 0 
}

}

export default dynamicPageNumbers;