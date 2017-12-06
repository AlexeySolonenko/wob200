export const searchNestedArrays = (arr, keys) => {
    let keysIsArray = false;
    try { keysIsArray = Array.isArray(keys);}
    catch(err) {
      console.log(err); 
      return 'Not found. See logs';
    };
    if(!keysIsArray) { 
      console.log('Second argument is not an array of keys. Provide an array of keys to implement a sequential nested search');
      return 'Not found.';
    };

    let res = 'Not found';
    let depth = keys.length;
    let newKeys = keys;
    if(depth >= 1) { 
      try {
        arr.find( (i, ind) => {
          if(Object.keys(i)==keys[0]) { 
            res = arr[ind][keys[0]];
          };
        });
        newKeys.shift();
        res = searchNestedArrays(res, newKeys);
        return res;
      } catch(err) { 
        console.log(err);
        return 'Not found';
      }
    } else if (depth == 0) {
      return arr;
    };
  };