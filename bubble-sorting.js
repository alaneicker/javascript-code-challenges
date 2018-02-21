// Use bubble sorting to sort an array of numbers in numerical order

(function () {

  'use strict';

  let bubbleSort = (theArray = []) => {
    let swappedItem;

    return theArray.map((item, i) => {
      let newItem;
      let nextItem = i += 1;

      if (item && nextItem && item > nextItem) {
        newItem = nextItem;
        swappedItem = item;
      } else if (swappedItem !== undefined) {
        newItem = swappedItem;
        swappedItem = undefined;
      } else {
        newItem = item;
      }

      return newItem;
    });
  };

  console.log(bubbleSort([1,2,4,3,5,6,8,7,10,9]));

}());
